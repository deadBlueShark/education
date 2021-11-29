import React, { Component } from 'react'
import Item from './Item'

class Table extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const blogs = this.props.blogs.map((data, index) => {
      return <Item key={data.id} title={data.title}
        description={data.description} active={data.active}></Item>
    })

    return (
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-4 pb-4">Hello Binance</h2>
          </div>

          {blogs}
        </div>
      </div>
    )
  }
}

export default Table
