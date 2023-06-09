import React from 'react'
import { useState } from 'react';
import '../styles/components/input-with-image.scss';

function InputWithImage({h5, placeholderColor, placeholder, src}) {

  const [additionalText, setAdditionalText] = useState('');
  
  const handleAdditionalTextChange = (event) => {
    setAdditionalText(event.target.value);
  };

  return (
    <>
      <div className='image-input'>
        <div>
            <h5>{h5}</h5>
            <input
                type="text"
                value={additionalText}
                placeholder={placeholder}
                onChange={handleAdditionalTextChange}
                className='image-input__input-two'
                style={{ color: placeholderColor }}
            />
        </div>
        <img src={src} alt="" className='image-input__image' />
    </div>
    </>
  )
}

export default InputWithImage
