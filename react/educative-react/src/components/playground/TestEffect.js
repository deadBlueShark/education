import React from 'react'

const TestEffect = () => {
  const [count, setCount] = React.useState(0)

  // Similar to componentDidMount and componentDidUpdate
  React.useEffect(() => {
    document.title = count
  })

  // only called once, after the component renders for the first time
  React.useEffect(() => {
    console.log(count)
  }, [])


  return (
    <button onClick={() => setCount(count + 1)}>+</button>
  )
}

export default TestEffect
