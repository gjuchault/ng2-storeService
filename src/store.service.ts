import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { get } from 'object-path';

type Transformer = (obj: any) => any;

let transform: Transformer = (obj) => obj;

@Injectable()
export class StoreService {
    private storeModule: string;
    private path       : Array<string>;

    constructor(public store: Store<any>) {}

    public static setTransformFunction(transformer: Transformer): void {
        transform = transformer;
    }

    public retrieve(path: string): Observable<any> {
        const splittedPath = path.split('.');
        const storeModule  = splittedPath.shift();
        const restPath     = splittedPath;

        return Observable.create(observer => {
            this.store
                .select(storeModule)
                .subscribe((r : any) => {
                    if (!r) {
                        return;
                    }

                    const obj    = transform(r);
                    const target = get(obj, restPath);

                    observer.next(target);
                });
        });
    }

    public dispatch(type: any, payload: any): void {
        this.store.dispatch({ type, payload });
    }
}
