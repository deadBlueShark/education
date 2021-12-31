import React from 'react'

import timeStore from '../stores/TimeStore'


const TimeCounter = () => {
  const { days, hours, minutes, seconds, activeSession } = timeStore.getState()

  return (
    <div className="time-counter-app">
      <div className="TimeCounterAppContainer">
        <section className="Counter">
          <h4 className="App__subheader">TOTAL TIME SPENT ON THE PROJECT</h4>

          <main className="Counter--main">
            <div className="Counter--main__session">
              <span className="Counter__text--grey">ACTIVE SESSION: </span>
              <select
                className="Counter__text--grey"
                onChange={setActiveSession}
                value={activeSession}
              >
                <option>DAYS</option>
                <option>HOURS</option>
                <option>MINUTES</option>
                <option>SECONDS</option>
              </select>
            </div>

            <div className="Counter--main__values">
              <div>
                <span className="App__text--white Counter__text--large">
                  {days}
                </span>
                <span className="Counter__text--grey">DAYS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {hours}
                </span>
                <span className="Counter__text--grey">HOURS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {minutes}
                </span>
                <span className="Counter__text--grey">MINUTES</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {seconds}
                </span>
                <span className="Counter__text--grey">SECONDS</span>
              </div>
            </div>
          </main>
          <div className="App__buttons">
            <button className="App__text--white"
              onClick={ () => dispatchAction('INCREASE_SESSION', 1) } >
              INCREASE
            </button>
            <button className="App__text--white"
              onClick={ () => dispatchAction('DECREASE_SESSION', 1) } >
              DECREASE
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}


const setActiveSession = event => {
  dispatchAction('SET_SESSION', event.target.value)
}

const dispatchAction = (type, payload) => {
  timeStore.dispatch(composeAction(type, payload))
}

// actions

const composeAction = (type, payload) => ({ type, payload })

export default TimeCounter
