import React from 'react'
import Story from './Story'

const StoriesList = React.memo(({list, removeHandler, commentCountOrder, switchSortHandler}) => {
  const listItems = list.map(item =>
    <Story key={item.objectID} item={item} removeHandler={removeHandler} />)
  return (
    <>
    {console.log('ff')}
      <table className="table table-bordered table-sortable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th className={`sortable ${commentCountOrder}`} onClick={() => switchSortHandler(commentCountOrder)}>
              Comment nums
            </th>
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
})

export default StoriesList
