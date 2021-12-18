import React from 'react'

const useSemiPersistentState = (key, initialState) => {
  const isMounted = React.useRef(false)
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  )

  React.useEffect(() => {
    // Prevent unnecessary saved storage at component initiation
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    localStorage.setItem(key, value)
  }, [key, value])

  return [value, setValue]
}

export default useSemiPersistentState
