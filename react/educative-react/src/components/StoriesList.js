import React from 'react'
import Story from './Story'

const StoriesList = ({list, removeHandler, title}) => {
  const listItems = list.map(item =>
    <Story key={item.objectID} item={item} removeHandler={removeHandler} />)
  return (
    <>
      <h4>{title}</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Comment nums</th>
            <th>Points</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {listItems.length ? listItems : (<tr><td>No result.</td></tr>)}
        </tbody>
      </table>
    </>
  )
}

export default StoriesList
