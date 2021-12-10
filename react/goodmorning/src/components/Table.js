import React, {Component} from 'react'

class Table extends Component {
  render() {
    const {characters, removeCharacter} = this.props

    return (
      <table className="table table-bordered">
        <TableHeader />
        <TableBody characters={characters}
          removeCharacter={removeCharacter}/>
      </table>
    )
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.characters.map((character, index) => {
    return (
      <tr key={index}>
        <td>{character.name}</td>
        <td>{character.job}</td>
        <td>
          <button className="btn btn-danger"
            onClick={() => props.removeCharacter(index)}>Remove</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

export default Table
