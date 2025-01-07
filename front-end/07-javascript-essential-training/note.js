1. Javascript conforms the ECMAScript standard, a specification for interpreting code
and languages like JS. ECMAScript itself is not a language but an evolving standard

2. JS render blocking

New JS loading method:
  - Right away loading:
The HTML will parse until it encounters a reference to a JS, then the JS file is loaded,
executed and then we continue the HTML parsing:
    + HTML parsing: =========         ========
    + JS download:           =====
    + JS execution:               ====

  - Asynchronous loading: async
The JS file will be downloaded alongside the HTML and render blocking only kicks in when
the script is executed. Its better and useful in some cases
    + HTML parsing: =========    ========
    + JS download:      =====
    + JS execution:          ====

  - Deferred loading: defer
The JS file execution only happens when everything else is loaded
    + HTML parsing: =================
    + JS download:           =====
    + JS execution:                  ====

3. What is Closure?
A function inside a function that relies on variables in the outside function to work.
(A function that remembers the environment they were created in)

Note: All local variables will be wiped out when function execution ends. But if inside
function access to outside function''s variables, it will be reserved

4. Event
Browser-level events: load, window resize ...
DOM-level events: click, focus ...

Event Handler vs Event Listener

5. Code validating tool
JSLint, JSHint
ES2015 or ES6
