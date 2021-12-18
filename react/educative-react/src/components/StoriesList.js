import React from 'react'
import Story from './Story'

const StoriesList = ({list, removeHandler, title}) => {
  const listItems = list.map(item => <Story key={item.objectID} item={item} removeHandler={removeHandler} />)
  return (
    <>
      <h4>{title}</h4>
      {listItems.length ? listItems : 'No result.'}
    </>
  )
}

export default StoriesList
