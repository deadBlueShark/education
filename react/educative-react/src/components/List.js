import React from 'react'
import Item from './Item'

const List = ({list, removeHandler}) =>
  list.map(item => <Item key={item.objectID} item={item} removeHandler={removeHandler} />)

export default List
