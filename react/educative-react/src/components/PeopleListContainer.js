import React from 'react';
import PeopleList from './PeopleList'
import InputWithLabel from './InputWithLabel'

const initialPeople = [
  {id: 1, name: 'Nguyen', age: 30},
  {id: 2, name: 'David', age: 20},
  {id: 3, name: 'Harvey', age: 49},
]

const fetchAsyncPeople = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject()
      resolve({data: {people: initialPeople}})
    }, 1000)
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

const PeopleListContainer = () => {
  // useReducer HOOK
  /* useReducer hook receives a reducer function and an initial state as arguments
  and returns an array with two items, the first item is the current state; the second
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

  // SEARCH FUNCTION
  const [searchTerm, setSearchTerm] = React.useState('')

  const searchHandler = (term) => {
    setSearchTerm(term)
  }

  const searchedList = people.data.filter(item => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      <h4>People list</h4>
      <InputWithLabel onChangeHandler={searchHandler} value={searchTerm}
        value={searchTerm}><b>Search</b></InputWithLabel>
      <hr />
      <div>
        {people.isLoadingPeopleError && "Something went wrong!"}
        {people.isLoadingPeople
          ? 'Loading...'
          : <PeopleList list={searchedList} removeHandler={removePersonHandler}/>
        }
      </div>
    </>
  )
}

export default PeopleListContainer
