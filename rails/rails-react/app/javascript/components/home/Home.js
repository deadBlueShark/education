import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Table from './table/Table'


class Home extends Component {
  constructor() {
    super()

    this.state = {
      blogs: [
        {id: 1, title: 'Register Binance',
          description: "In this video I'll show you step-by-step how to create a binance account from scratch. We're also gonna go through the binance security setup and the binance account verification process together.", active: false},
        {id: 2, title: 'Buy BTC on Binance', description: '', active: false},
        {id: 3, title: 'KYC Binance tutorial', description: '', active: false},
        {id: 4, title: 'P2P transaction tutorial', description: '', active: false}
      ]
    }
  }

  render() {
    return (
      <div>
        <Jumbotron></Jumbotron>
        <Table blogs={this.state.blogs}></Table>
      </div>
    )
  }
}

export default Home
