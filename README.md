# ng2-storeService

StoreService to use ngrx with ease and even more performance and respecting Angular2 philosophy.

## Installation

### SystemJS

Add this line to your SystemJS configuration:

```
'ng2-storeservice': 'node_modules/ng2-storeservice'
```

### Webpack

Nothing special to do.

### Bootstrap

Add `StoreService` to your providers:

```
...
import { StoreService } from 'ng2-storeservice';

...

bootstrap(App, [
    ...
    StoreService,
    ...
]);

```

## Usage

### HTML

If you use ngrx, it's probable you're using `async` transform to use Observables from RxJS.

For example:
```html
<ul>
    <todos-item *ngFor="let todo of (todos | async)" [todo]="todo" (checkChange)="updateTodo($event)"></todos-item>
</ul>
```

Nothing to change here

### Service

This is how your service should looks like:

```
import { Injectable } from '@angular/core';
import { StoreService } from '../../shared/services';
import { ADD_TODO, CHECK_TODO } from './todos.reducer';

@Injectable()
export class TodosService {
  constructor(public store: StoreService) {
  }

  getTodos() {
      return this.store.retrieve('todos.list');
  }

  addTodo(todo: String) {
    this.store.dispatch(ADD_TODO, { id: 1, value: 'Foo', checked: false });
  }

}
```

First of all, inject the StoreService with `public store: StoreService`.

Then you will have functions that can either retrieve data from the store, or affect it with dispatch.

### Retrieving

Advantage over what you do on ngrx: select through nested store. Even more performance!
There is also automatic integration with ImmutableJS. If your object is Immutable, it will `.toJS()` it!

Example:

```
this.store.retrieve('path.to.part.of.your.state');
```

Signature:

```
retrieve(path: String): Observable
```

### Dispatching

This is simply a wrapper over ngrx's dispatch.

Example:

```
this.store.dispatch(ADD_TODO, { id: 1, value: 'Foo', checked: false });
```

Signature:

```
dispatch(type: any, payload: Object): void
```

## License

Released under MIT License.
