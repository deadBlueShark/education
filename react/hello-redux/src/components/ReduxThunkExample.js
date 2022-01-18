// cannot run

const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE';

const getUser = () => {
  return (dispatch) => {
    // Initial action dispatched
    dispatch({ type: GET_CURRENT_USER });
    // Return promise with success and failure actions
    return axios.get('/api/auth/user').then(
      user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }),
      err => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
    );
  };
};

const getRecipes = (limit = 100) => (dispatch) => {
  dispatch({ type: constants.FETCH_RECIPES_START, limit });

  axios.get(`recipes?limit=${ limit }`)
    .then(({ data }) => dispatch({type: constants.FETCH_RECIPES_DONE, data}))
    .catch(error => dispatch({type: constants.FETCH_RECIPES_ERROR, error}));
};


/*
Actions passed to dispatch() don’t need to be objects. Reducers are the only part
of Redux that requires actions to be objects. Using middleware, we can transform
non-object actions into objects before they reach the reducers.

Using redux-thunk, we can create asynchronous action creators with access to both
the Redux state and the dispatch() function.

With redux-thunk installed, we can start writing action creators that return
functions instead of objects.
*/

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


// action creator that return function, not object
function addRcipe(title)  {
  return function (dispatch, getState) {
    const trimmedTitle = trimTitle(title);

    store.dispatch({ type: ADD_RECIPE_STARTED });

    setTimeout(
      () => dispatch({ type: ADD_RECIPE, title: trimmedTitle }),
      1000
    );
  }
}
