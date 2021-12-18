import React from 'react'

export default function Story({item, removeHandler}) {
  const handleClick = () => removeHandler(item.objectID)

  return (
    <tr>
      <td>
        <span>
          <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
        </span>
      </td>
      <td>{item.author}</td>
      <td>{item.num_comments}</td>
      <td>{item.points}</td>
      <td className="text-center">
        <button className="btn btn-outline-danger" onClick={handleClick}>x</button>
      </td>
    </tr>
  )
}
