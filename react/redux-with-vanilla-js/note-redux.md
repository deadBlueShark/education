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

2. In Redux, we send actions to the store, which passes them to middleware and
then to reducers. To notify a store about an action, we use the store’s dispatch() method.

- Unlike many Flux implementations, in Redux, the store’s dispatch() API is not
globally available. You have a few options to access it:

  + By holding a reference to the store
  + Inside middleware
  + Through methods provided by special libraries for different frameworks

3. Flux Standard Actions

- The FSA spec defines the structure of actions and a number of optional and
required properties. At its base, an action should have up to four fields:

```javascript
const action = {
  type,
  error,
  payload,
  meta
};
```
- type: is the regular Redux action identifier.

- error: is a Boolean that indicates whether the action is in an error state.
The rationale behind this is that instead of having multiple actions, like
'ADD_RECIPE_SUCCESS' and 'ADD_RECIPE_ERROR', we can have only one action,
'ADD_RECIPE', and use the error flag to determine the status.

- payload: is an object holding all the information needed by the reducers.

- meta: is a property that holds additional metadata about the action which
could be consumed by middleware, but is not needed by reducers.
