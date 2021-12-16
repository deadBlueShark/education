import React from 'react'
import StoriesList from './components/StoriesList'
import PeopleList from './components/PeopleList'
import InputWithLabel from './components/InputWithLabel'
import useSemiPersistentState from './custom_hooks/UseSemiPersistentState'

const initalStories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

// Simulate a async fetch data
// const getAsyncStories = () => {
//   return Promise.resolve({data: {stories: initalStories}})
// }
// other way
// const getAsyncStories = () => {
//   return new Promise(resolve => resolve({data: {stories: initalStories}}))
// }

// Some delay
const getAsyncStories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulate an API call error
      // reject('errr')
      resolve({data: {stories: initalStories}});
    }, 2000)
  })
}

const initialPeople = [
  {id: 1, name: 'Nguyen', age: 30},
  {id: 2, name: 'David', age: 20},
  {id: 3, name: 'Harvey', age: 49},
]

const fetchAsyncPeople = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data: {people: initialPeople}})
    }, 2000)
  })
}

// useReducer HOOK
// state: {data: [], isLoadingPeople, isLoadingPeopleError}
const peopleReducer = (state, action) => {
  switch(action.type) {
    case 'PEOPE_FETCH_INIT':
      return {...state, isLoadingPeople: true, isLoadingPeopleError: false}
    case 'PEOPLE_FETCH_SUCCESS':
      return {...state, data: action.payload, isLoadingPeople: false, isLoadingPeopleError: false}
    case 'PEOPLE_FETCH_FAILURE':
      return {...state, isLoadingPeople: false, isLoadingPeopleError: true}
    case 'PEOPLE_REMOVAL':
      return {...state, data: state.data.filter(person => person.id !== action.payload.personId)}
    default:
      throw new Error()
  }
}

const App = () => {
  // Variables defined in the function’s body will be re-defined each time this
  // function runs, like all JavaScript functions

  // you can improve your code so React handles advanced dynamic lists more gracefully.
  // By assigning a key attribute to each list item’s element, React can identify
  // modified items if the list changes (e.g. re-ordering)

  // We avoid using the index of the item in the array to make sure the key attribute
  // is a stable identifier. If the list changes its order, for example, React will
  // not be able to identify the items properly

  const [searchTerm, setSearchTerm] = useSemiPersistentState('term', 'React')
  const [stories, setStories] = React.useState([])
  const [isLoadingStories, setIsLoadingStories] = React.useState(false)
  const [isLoadingStoriesError, setIsLoadingStoriesError] = React.useState(false)

  React.useEffect(() => {
    setIsLoadingStories(true)

    getAsyncStories().then(res => {
      setStories(res.data.stories)

      setIsLoadingStories(false)
    }).catch(() => setIsLoadingStoriesError(true))
  }, [])

  const searchHandler = (value) => {
    setSearchTerm(value)
    // Not good to use this, side effect in function
    // localStorage.setItem('searchTerm', value)
  }

  const removeStoryHandler = (id) => {
    const newStories = stories.filter(story => story.objectID !== id)
    setStories(newStories)
  }

  /* React’s useEffect Hook takes two arguments: The first argument is a function
  where the side-effect occurs. In our case, the side-effect is when the user types
  the searchTerm into the browser’s local storage. The second argument is a dependency
  array of variables. If one variable changes, the function for the side-effect is
  called. In our case, the function is called every time the searchTerm changes;
  it’s called initially when the component renders for the first time.*/

  /* If the dependency array of React’s useEffect is an empty array, the function
  for the side-effect is only called once, after the component renders for the first
  time. The hook lets us opt into React’s component lifecycle. It can be triggered
  when the component is first mounted, but also one of its dependencies are updated*/

  /* Move to custom hook
  React.useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm])
  */

  const searchedList = stories.filter(item => {
    const lowerTerm = searchTerm.toLowerCase()
    return item.title.toLowerCase().includes(lowerTerm) ||
      item.author.toLowerCase().includes(lowerTerm)
  })

  // useReducer HOOK
  /* useReducer hook receives a reducer function and an initial state as arguments
  and returns an array with two items. The first item is the current state; the second
  item is the state updater function (also called dispatch function) */
  const [people, dispatchPeople] = React.useReducer(peopleReducer,
    {data: [], isLoadingPeople: false, isLoadingPeopleError: false})

  React.useEffect(() => {
    dispatchPeople({type: 'PEOPE_FETCH_INIT'})

    fetchAsyncPeople().then(result => {
      dispatchPeople({type: 'PEOPLE_FETCH_SUCCESS', payload: result.data.people})
    }).catch(() => dispatchPeople({type: 'PEOPLE_FETCH_FAILURE'}))
  }, [])

  const removePersonHandler = (id) => {
    dispatchPeople({type: 'PEOPLE_REMOVAL', payload: {personId: id}})
  }

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel onChangeHandler={searchHandler} value={searchTerm}
        id="search" value={searchTerm} isFocus><b>Search</b></InputWithLabel>
      <hr />
      <div>
        {isLoadingStoriesError ? "Something went wrong!"
          : (isLoadingStories ? 'Loading...' : <StoriesList list={searchedList} removeHandler={removeStoryHandler}/>)
        }
      </div>

      <div>
        {people.isLoadingPeopleError ? "Something went wrong!"
          : (people.isLoadingPeople ? 'Loading...' : <PeopleList list={people.data} removeHandler={removePersonHandler}/>)
        }
      </div>
    </div>
  );
}

export default App;
