import React from 'react'
import { useState } from 'react';
import '../styles/components/input-with-placeholder.scss';

function InputWithPlaceholder(props) {

  const [inputValue, setInputValue] = useState('');
  const [additionalText, setAdditionalText] = useState('');

  const handleInputChange = () => {
    setInputValue('First Name');
  };

  const handleAdditionalTextChange = (event) => {
    setAdditionalText(event.target.value);
  };

  return (
    <div className='constant-placeholder'>
        <h5>{props.h5}</h5>
      <input
        type="text"
        value={additionalText}
        placeholder={props.placeholder}
        onChange={handleAdditionalTextChange}
        className='constant-placeholder__input-two'
      />
    </div>
  )
}

export default InputWithPlaceholder
