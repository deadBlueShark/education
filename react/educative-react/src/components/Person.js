import React from 'react'

const Person = ({person, removeHandler}) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.age}</td>
      <td className="text-center">
        <button className="btn btn-outline-danger"
          onClick={() => removeHandler(person.id)}>x</button>
      </td>
    </tr>
  )
}

export default Person
