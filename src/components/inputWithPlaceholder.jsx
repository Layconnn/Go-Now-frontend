import React from 'react'
import { useState } from 'react';
import '../styles/components/input-with-placeholder.scss';

function InputWithPlaceholder(props) {
  const [focused, setFocused] = useState(false)
  const [showElement, setShowElement] = useState(false);


  const handleClick = () => {
    setShowElement(true);
  };

  const handleFocus = () => {
    setFocused(true);
  }
  
  const {errorMessage} = props;
  return (
    <div className={`constant-placeholder ${showElement ? 'show-content' : ''}`}  onClick={handleClick}>
      <h5>{props.h5}</h5>
     {showElement && 
      <input
      name={props?.name}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={handleFocus}
      focused={focused.toString()}
      pattern={props.pattern}
      className={`constant-placeholder__input-two ${showElement ? 'show-content__input-two' : ''}`}
    />
     }
     <span className='constant-placeholder__error' >{errorMessage}</span>
    </div>
  )
}

export default InputWithPlaceholder
