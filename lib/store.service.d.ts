import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
export declare type Transformer = (obj: any) => any;
export declare class StoreService {
    store: Store<any>;
    private storeModule;
    private path;
    constructor(store: Store<any>);
    static setTransformFunction(transformer: Transformer): void;
    retrieve<T>(path: string): Observable<T>;
    dispatch(type: any, payload: any): void;
}
