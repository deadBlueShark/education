import React from 'react'
import techStore from '../stores/TechReduxStore'

const TECH_STACK = ['React', 'Elm', 'React-redux']

const HelloWorld = () => {
  const selectedTech = techStore.getState().tech

  const buttons = TECH_STACK.map((tech, index) =>
    <button key={ index } className="hello-btn"
      onClick={ () => techStore.dispatch({ type: 'SET_TECH', tech }) }>{ tech }</button>)

  return (
    <>
      <div className="hello-world">
        Hello World <span className="hello-world__tech">{selectedTech}!</span>
      </div>
      <div className="hello-btns">{buttons}</div>
    </>
  )
}

export default HelloWorld


/*

Unlike setState() in pure React, the only way you update the state of a Redux application is by dispatching an action.

An action is accurately described with a plain Javascript object, but it must have a type field.

In a Redux app, every action flows through the reducer. All of them.

By using a switch statement, you can handle different action types within your Reducer.

Action Creators are simply functions that return action objects.

It is a common practice to have the major actors of a redux app live within their own folder/directory.

You should not mutate the state received in your Reducer. Instead, you should always return a new copy of the state.

To subscribe to store updates, use the store.subscribe() method.

*/
