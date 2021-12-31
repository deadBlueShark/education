import React from 'react'
import formatNumber from 'format-number'

import bankStore from '../stores/BankStore'

const BankApp = () => {
  const {username, totalAmount} = bankStore.getState()

  return (
    <div className="BankApp">
      <div className="BankAppContainer">
        <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={() => bankStore.dispatch(withdrawAction(10000))}>WITHDRAW $10,000</button>
          <button onClick={() => bankStore.dispatch(withdrawAction(5000))}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    </div>
  )
}

const withdrawAction = amount => {
  return { type: 'WITHDRAW', amount }
}

export default BankApp
