import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "../styles/components/country-input.scss";

function CountryInput(props) {
  const [showElement, setShowElement] = useState(false);

  const handleClick = () => {
    setShowElement(true);
  };

  const change = props.value

  const handleBlur = () => {
    if(change === '' || !change){
      setShowElement(false)
    }else{
      ''
    }
  }

  return (
    <>
      <div
        className={`constant-placeholders ${
          showElement ? "show-content2" : ""
        }`}
        onClick={handleClick}
      >
        <h5
          className={`constant-placeholders__label ${
            showElement ? "show-content2__label" : ""
          }`}
        >
          {props.h5}
        </h5>
        {showElement && (
          <PhoneInput
            defaultCountry="NG"
            placeholder={props.placeholder}
            color={props.color}
            onChange={props.onChange}
            autoFocus
            onBlur={handleBlur}
          />
        )}
      </div>
    </>
  );
}

export default CountryInput;