import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
export declare class StoreService {
    store: Store<any>;
    private storeModule;
    private path;
    constructor(store: Store<any>);
    static setTransformFunction(transformer: Function): void;
    retrieve(path: string): Observable<any>;
    dispatch(type: any, payload: Object): void;
}
