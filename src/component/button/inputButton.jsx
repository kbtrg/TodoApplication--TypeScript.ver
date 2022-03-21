import React from 'react'

const InputButton = React.memo((props) => (
  <button
    className={`rounded-lg border-2 border-solid border-indigo-600 bg-stone-100 p-1 ${props.extraClassName}`}
    onClick={props.onClick}
  >
    {props.innerText}
  </button>
))
InputButton.displayName = 'InputButton'

export default { InputButton }
