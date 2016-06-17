import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
export declare class StoreService {
    store: Store<any>;
    storeModule: string;
    path: Array<string>;
    constructor(store: Store<any>);
    retrieve(path: string): Observable<any>;
    dispatch(type: any, payload: Object): void;
}
