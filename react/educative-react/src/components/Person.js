import React from 'react'

const Person = ({person, removeHandler}) => {
  return (
    <div>
     <span>{person.name}</span>
     <span>{person.age}</span>
     <button onClick={() => removeHandler(person.id)}>x</button>
    </div>
  )
}

export default Person
