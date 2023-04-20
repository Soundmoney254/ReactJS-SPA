import React, { useState } from 'react'

function Typing() {
    const [inputValue, setInputValue] = useState('');

    function handleTypedCharacters(event){
        setInputValue(event.target.value);
    }
  return (
    <div>
    <label htmlFor='name'>Type your name:</label>
    <input type= 'text' value={inputValue} onChange={ handleTypedCharacters} id='name'/>
    <h4>Hello, {inputValue}!</h4>
  </div>
  )
}

export default Typing