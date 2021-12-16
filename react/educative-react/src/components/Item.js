import React from 'react'

export default function Item({item, removeHandler}) {
  const handleClick = () => removeHandler(item.objectID)

  return (
    <div key={item.objectID}>
     <span><a href={item.url} target="_blank" rel="noreferrer">{item.title}</a></span>
     <span>{item.author}</span>
     <span>{item.num_comments}</span>
     <span>{item.points}</span>
     <button onClick={handleClick}>x</button>
    </div>
  )
}
