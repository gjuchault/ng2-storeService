import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { get } from 'object-path';

@Injectable()
export class StoreService {
    storeModule: string
    path       : Array<string>

    constructor(public store: Store<any>) {}

    retrieve(path: string): Observable<any> {
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

                    const obj    = r.toJS ? r.toJS() : r;
                    const target = get(obj, restPath);

                    observer.next(target);
                });
        });
    }

    dispatch(type: any, payload: Object): void {
        this.store.dispatch({ type, payload });
    }
}
