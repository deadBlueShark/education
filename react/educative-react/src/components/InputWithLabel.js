import React from 'react'

function InputWithLabel({children, value, onChangeHandler, type = "text", isFocus}) {
  const handleChange = event => onChangeHandler(event.target.value)

  // A
  const inputRef = React.useRef();

  // C
  React.useEffect(() => {
    if (isFocus && inputRef.current) {
      // D
      inputRef.current.focus();
    }
  }, [isFocus]);

  return (
    <>
      <div className="input-group mb-3 input-group-sm">
        <span className="input-group-text">{children}</span>
        {/* B */}
        <input ref={inputRef} type={type} className="form-control"
          onChange={handleChange} value={value} />
      </div>
    </>
  )
}

export default InputWithLabel

/*
(A) First, create a ref with React’s useRef hook. This ref object is a persistent
value which stays intact over the lifetime of a React component. It comes with a
property called current, which, in contrast to the ref object, can be changed.

(B) Second, the ref is passed to the input field’s JSX-reserved ref attribute and
the element instance is assigned to the changeable current property.

(C) Third, opt into React’s lifecycle with React’s useEffect Hook, performing the
focus on the input field when the component renders (or its dependencies change).

(D) And fourth, since the ref is passed to the input field’s ref attribute, its
current property gives access to the element. Execute its focus programmatically
as a side-effect, but only if isFocused is set and the current property is existent.
*/
