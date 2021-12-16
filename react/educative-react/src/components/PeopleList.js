import React from 'react'
import Person from './Person'

const PeopleList = ({list, removeHandler}) => {
  return (
    <>
      <h4>People list</h4>
      {list.map(person => <Person key={person.id} person={person} removeHandler={removeHandler} />)}
    </>
  )
}

export default PeopleList
