import React from 'react'
import { useState } from 'react';
import '../styles/components/input-with-image.scss';

function InputWithImage({h5, placeholderColor, placeholder, src}) {

  const [additionalText, setAdditionalText] = useState('');
  
  const handleAdditionalTextChange = (event) => {
    setAdditionalText(event.target.value);
  };


  const [showElement, setShowElement] = useState(false);


  const handleClick = () => {
    setShowElement(true);
  };

  return (
    <>
      <div className={`image-input ${showElement ? 'show-content' : ''}`}  onClick={handleClick} >
        <div>
            <h5>{h5}</h5>
            {showElement
            &&
              <input
                type="text"
                value={additionalText}
                placeholder={placeholder}
                onChange={handleAdditionalTextChange}
                className={`image-input__input-two ${showElement ? 'show-content__input-two' : ''}`}
                style={{ color: placeholderColor }}
            />}
        </div>
        <img src={src} alt="" className='image-input__image' />
    </div>
    </>
  )
}

export default InputWithImage
