import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Firebase, {FirebaseContext} from './components/Firebase'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


/*

The Router makes it possible to navigate from URL-to-URL on the client-side of the
application without another request to a web server for every route change. The
application is only fetched once from a web server, after which all routing is
done on the client-side with React Router.

*/
