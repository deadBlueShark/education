import React from 'react'
import Story from './Story'

const StoriesList = ({list, removeHandler}) => {
  const listItems = list.map(item =>
    <Story key={item.objectID} item={item} removeHandler={removeHandler} />)
  return (
    <>
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
