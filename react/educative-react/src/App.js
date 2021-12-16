import React from 'react'
import List from './components/List'
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
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    getAsyncStories().then(res => {
      setStories(res.data.stories)
      setIsLoading(false)
    }).catch(() => setIsError(true))
  }, [])

  const searchHandler = (value) => {
    setSearchTerm(value)
    // Not good to use this, side effect in function
    // localStorage.setItem('searchTerm', value)
  }

  const removeHandler = (id) => {
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

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel onChangeHandler={searchHandler} value={searchTerm}
        id="search" value={searchTerm} isFocus><b>Search</b></InputWithLabel>
      <hr />
      {isError ? "Something went wrong!"
        : (isLoading ? 'Loading...' : <List list={searchedList} removeHandler={removeHandler}/>)
      }
    </div>
  );
}

export default App;
