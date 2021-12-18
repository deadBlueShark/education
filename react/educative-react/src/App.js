import React from 'react'
import StoriesListContainer from './components/StoriesListContainer'
import PeopleListContainer from './components/PeopleListContainer'
import ApiStoriesContainer from './components/ApiStoriesContainer'

const App = () => {
  return (
    <div>
      <div className="row">
        <h1>My Hacker Stories</h1>
        <div className="col-md-6">
          <StoriesListContainer />
        </div>
        <div className="col-md-6">
          <PeopleListContainer />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
         <ApiStoriesContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
