// Use closure
function whichSideOfForce() {
  const light = ['Luke', 'Obi-Wan', 'Yoda'] // Do not init this every time
  const dark = ['Vader', 'Palpatine'] // Do not init this every time
  console.log('FFF')

  return (name) => {
    if (light.includes(name)) return 'Light'
    else if (dark.includes(name)) return 'Dark'
    else return 'Unknown'
  }
}

const detectSide = whichSideOfForce()
console.log(detectSide('Luke'))
console.log(detectSide('Vader'))
console.log(detectSide('Nguyen'))
