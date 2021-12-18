import React from 'react'

const Person = ({person, removeHandler}) => {
  return (
    <div>
     <span>Name: {person.name}</span>
     <span>Age: {person.age}</span>
     <button className="btn btn-danger" onClick={() => removeHandler(person.id)}>x</button>
    </div>
  )
}

export default Person
