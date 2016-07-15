import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
export declare class StoreService {
    store: Store<any>;
    private storeModule;
    private path;
    private transform;
    constructor(store: Store<any>);
    setTransformFunction(transformer: Function): void;
    retrieve(path: string): Observable<any>;
    dispatch(type: any, payload: Object): void;
}
