1. Declaring variables

- Prefer const, then let
- Do not assign variables in chains (a = b = c = 0)
- Create arrays, objects using literals (no `new Array()`, `new Object()`)

2. Type Casting

- Type casting strings with the String wrapper (Ex: String(45))
Reason:
  Use new String(): This returns object, not string
  Use target.toString(): not work if target is null or undefined
  String() -> OK

- Use Number() for type cast numbers

- Type cast booleans using double negation(!!), Boolean() is still OK

3. Comparing values
(0 == '0', false == 0, false == '0', null == undefined)
- Use triple-character equality operators (===)
- Do not use Yoda condition (9 === age, use age === 9 instead)
