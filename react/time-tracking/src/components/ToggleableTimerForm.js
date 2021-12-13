import React, {Fragment} from 'react'
import TimerForm from './TimerForm'

class ToggleableTimerForm extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.isOpen
          ? <TimerForm />
          : (
              <div className="ui basic content center aligned segment">
                <button className="ui basic button icon">
                  <i className="plus icon" />
                </button>
              </div>
            )

        }
      </Fragment>
    )
  }
}

export default ToggleableTimerForm
