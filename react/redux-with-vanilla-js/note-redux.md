1. A store has five methods to access, change, and observe the state:

- getState() -> Accessing the store
- dispatch() -> Changing the store
- subscribe() -> Listening to updates:

  ```javascript
    const unsubscribe = store.subscribe(onStoreChange);

    // When the subscription is no longer needed
    unsubscribe();
  ```
- replaceReducer()
- Symbol.observable
