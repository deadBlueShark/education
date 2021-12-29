export const techReducer = (state, action) => {
  if (action.type === 'SET_TECH') {
    return {...state, tech: action.tech}
  }

  return state
}


export const userReducer = (state, action) => {
  return state
}

