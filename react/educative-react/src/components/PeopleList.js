import React from 'react'
import Person from './Person'

const PeopleList = ({list, removeHandler}) => {
  const peoples = list.map(person => <Person key={person.id} person={person} removeHandler={removeHandler} />)

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {peoples.length ? peoples : (<tr><td>No result.</td></tr>)}
        </tbody>
      </table>
    </>
  )
}

export default PeopleList
