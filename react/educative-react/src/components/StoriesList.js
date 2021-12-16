import React from 'react'
import Story from './Story'

const StoriesList = ({list, removeHandler}) => {
  return (
    <>
      <h4>Stories list</h4>
      {list.map(item => <Story key={item.objectID} item={item} removeHandler={removeHandler} />)}
    </>
  )
}


export default StoriesList
