/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
 function extend(o, p) {
  for (var key in p) {
    o[key] = p[key];
  }
  return o;
 }
var a = {a: 1, b: 2, c: 3};
var b = {d: 4, b: 4, f: 9};
console.log("EXTEND\n", extend(a, b)); // {a: 1, b: 4, c: 3, d: 4, f: 9}
console.log("\n", a, b);

/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is left alone.
 * This function does not handle getters and setters or copy attributes.
 */
function merge(o, p) {
  for (var key in p) {
    if (o.hasOwnProperty(key)) continue;
    o[key] = p[key];
  }
  return o;
}
a = {a: 1, b: 2, c: 3};
b = {d: 4, b: 4, f: 9};
console.log("MERGE\n", merge(a, b)); // {a: 1, b: 2, c: 3, d: 4, f: 9}
console.log("\n", a, b);

/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
  for(var prop in o) {
    if (!(prop in p)) delete o[prop];
  }
  return o;
}
a = {a: 1, b: 2, c: 3};
b = {d: 4, b: 4, f: 9};
console.log("RESTRICT\n", restrict(a, b)); // {b: 2}
console.log("\n", a, b);

/*
 * For each property of p, delete the property with the same name from o.
 * Return o.
 */
function subtract(o, p) {
  for (var key in p) {
    delete o[key]
  }
  return o;
}
a = {a: 1, b: 2, c: 3};
b = {d: 4, b: 4, f: 9};
console.log("SUBTRACT\n", subtract(a, b)); // {a: 1, c: 3}
console.log("\n", a, b);

/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from p are used.
 */
function union(o, p) {
  return extend(extend({}, o), p);
}
a = {a: 1, b: 2, c: 3};
b = {d: 4, b: 4, f: 9};
console.log("UNION\n", union(a, b));
console.log("\n", a, b);

/*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 */
function intersection(o, p) {
  return restrict(extend({}, o), p);
}
a = {a: 1, b: 2, c: 3};
b = {d: 4, b: 4, f: 9};
console.log("INTERSECTION\n", intersection(a, b));
console.log("\n", a, b);

function keys(o) {
  if (typeof o !== 'object') throw TypeError();

  var keys = [];
  for (var key in o) {
    if (o.hasOwnProperty(key)) keys.push(key);
  }
  return keys;
}
console.log(keys(a));

function values(o) {
  if (typeof o !== 'object') throw TypeError();

  var values = [];
  for (var key in o) {
    if (o.hasOwnProperty(key)) values.push(o[key]);
  }
  return values;
}
console.log(values(a));
