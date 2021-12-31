export const techReducer = (state, action) => {
  if (action.type === 'SET_TECH') {
    return {...state, tech: action.tech}
  }

  return state
}


export const userReducer = (state, action) => {
  return state
}

export const bankReducer = (state, action) => {
  switch(action.type) {
    case 'WITHDRAW':
      return {...state, totalAmount: state.totalAmount - action.amount}
    default:
      return state
  }
}

export const counterReducer = (state, action) => {
  const currentSession = state.activeSession.toLowerCase()

  switch(action.type){
    case 'SET_SESSION':
      return {...state, activeSession: action.payload}
    case 'DECREASE_SESSION':
      return {...state, [currentSession]: state[currentSession] - action.payload}
    case 'INCREASE_SESSION':
      return {...state, [currentSession]: state[currentSession] + action.payload}
    default:
      return state
  }
}
