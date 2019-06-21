// Type Assertion

// this failed
// let s1 = {}
// let s1.name = 'Nguyen'

interface Student {
  name: string;
}

// this ok
let s2 = {} as Student
s2.name = "nguyen"
console.log(s2)

// this ok too
let s3 = <Student> {}
s3.name = 'harvey'
console.log(s3)

// as Type is prefer than <Type>
