import { getMessages } from '../static-data'

const messages = (state = getMessages(10), action) => {
  return state
}

export default messages
