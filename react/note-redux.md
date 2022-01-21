One of the best-known store enhancers is applyMiddleware().
This is currently the only store enhancer provided by Redux.

`applyMiddleware` lets you inject functionality into dispatch

An example of middleware that literally does nothing is this:

```javascript
const noOpMiddleware = store => next => action => {
  return next(action)
}
```
The equivalent, written with regular function syntax would be:

```javascript
function noOpMiddleware(store) {
  return function(next) {
    return function(action) {
      return next(action)
    }
  }
}
```

**I remember how to write middleware by remembering the phrase "Store next action."**
