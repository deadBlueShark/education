import React from 'react'
import StoriesList from './StoriesList'

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

  React.useEffect(() => {
    dispatchStories({type: 'STORIES_FETCH_INIT'})

    const query = `${API_ENDPOINT}react`
    fetch(query)
      .then(response => response.json())
      .then(result => {
        dispatchStories({type: 'STORIES_FETCH_SUCCESS', payload: result.hits})
      })
      .catch(() => dispatchStories({type: 'STORIES_FETCH_FAILURE'}))
  }, [])

  const removeStoryHandler = (id) => {
    dispatchStories({type: 'STORY_REMOVAL', payload: {objectID: id}})
  }
  return (
    <>
      {stories.isLoadingError && "Something went wrong!"}
      {stories.isLoading
        ? 'Loading...'
        : <StoriesList list={stories.data} title="Stories fetch from real API"
          removeHandler={removeStoryHandler}/>
      }
    </>
  )
}

export default ApiStoriesContainer
