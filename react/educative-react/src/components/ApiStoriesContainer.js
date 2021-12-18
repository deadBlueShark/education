import React from 'react'
import axios from 'axios'
import StoriesList from './StoriesList'
import InputWithLabel from './InputWithLabel'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='

const storiesReducer = (state, action) => {
  switch(action.type) {
    case 'STORIES_FETCH_INIT':
      return {...state, isLoading: true, isLoadingError: false}
    case 'STORIES_FETCH_SUCCESS':
      return {...state, data: action.payload, isLoading: false, isLoadingError: false}
    case 'STORIES_FETCH_FAILURE':
      return {...state, isLoading: false, isLoadingError: true}
    case 'STORY_REMOVAL':
      return {...state, data: state.data.filter(story => story.objectID !== action.payload.objectID)}
    default:
      throw new Error()
  }
}

const ApiStoriesContainer = () => {
  const [stories, dispatchStories] = React.useReducer(storiesReducer,
    {data: [], isLoading: false, isLoadingError: false})
  const [searchTerm, setSearchTerm] = React.useState('')
  const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`)

/*
  const fetchStories = React.useCallback(() => {
    if (!searchTerm) return;

    dispatchStories({type: 'STORIES_FETCH_INIT'})

    axios.get(url)
      .then(result => {
        dispatchStories({type: 'STORIES_FETCH_SUCCESS', payload: result.data.hits})
      })
      .catch(() => dispatchStories({type: 'STORIES_FETCH_FAILURE'}))
  }, [url])
*/

  // Use Async/Await
  const fetchStories = React.useCallback(async () => {
    dispatchStories({type: 'STORIES_FETCH_INIT'})

    try {
      const result = await axios.get(url)
      dispatchStories({type: 'STORIES_FETCH_SUCCESS', payload: result.data.hits})
    } catch {
      dispatchStories({type: 'STORIES_FETCH_FAILURE'})
    }
  }, [url])

  React.useEffect(() => {
    fetchStories()
  }, [fetchStories])

  const removeStoryHandler = React.useCallback(id => {
    dispatchStories({type: 'STORY_REMOVAL', payload: {objectID: id}})
  }, [])

  const searchHandler = (term) => {
    setSearchTerm(term)
  }

  const handleSearchSubmit = () => {
    setUrl(`${API_ENDPOINT}${searchTerm}`)
  }

  // Redundant because use search from API
  // const searchedList = stories.data.filter(item => {
  //   const lowerTerm = searchTerm.toLowerCase()
  //   return item.title.toLowerCase().includes(lowerTerm) ||
  //     item.author.toLowerCase().includes(lowerTerm)
  // })

  return (
    <>
      <h4>Stories fetch from real API</h4>
      <InputWithLabel onChangeHandler={searchHandler}
        value={searchTerm}>
        <button className="btn btn-success" disabled={!searchTerm}
          onClick={handleSearchSubmit}>
          Go
        </button>
      </InputWithLabel>
      <hr />
      {stories.isLoadingError && "Something went wrong!"}
      {stories.isLoading
        ? 'Loading...'
        : <StoriesList list={stories.data} removeHandler={removeStoryHandler}/>
      }
    </>
  )
}

export default ApiStoriesContainer
