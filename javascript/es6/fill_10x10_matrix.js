let nullVector = () => new Array( 10 ).fill( null );
let nullArray = nullVector().map( nullVector );
console.log(nullArray)
