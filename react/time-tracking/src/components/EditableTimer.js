import React, {Fragment} from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'

class EditableTimer extends React.Component {

  render() {
    const timer = this.props
    return (
      <Fragment>
        {timer.editFormOpen
          ? <TimerForm title={timer.title} project={timer.project}/>
          : <Timer title={timer.title} project={timer.project}
            elapsed={timer.elapsed} runningSince={timer.runningSince} />
        }
      </Fragment>
    )
  }
}

export default EditableTimer
