import React from "react";
import { useState } from "react";
import "../styles/components/input-with-image.scss";

function InputWithImage(props) {
  const [showElement, setShowElement] = useState(false);

  const handleClick = () => {
    setShowElement(true);
  };

  const change = props.value;

  const handleBlur = () => {
    if (change === "") {
      setShowElement(false);
    } else {
      ("");
    }
  };

  return (
    <>
      <div
        className={`image-input ${showElement ? "show-content" : ""}`}
        onClick={handleClick}
      >
        <div>
          <h5>{props.h5}</h5>
          {showElement && (
            <input
              name={props?.name}
              type={props.type}
              value={change}
              placeholder={props.placeholder}
              onChange={props.onChange}
              onBlur={handleBlur}
              autoFocus
              className={`image-input__input-two ${
                showElement ? "show-content__input-two" : ""
              }`}
            />
          )}
        </div>
        <img src={props.src} alt="" className={`image-input__image ${showElement ? "show-content__image" : ""}`} />
      </div>
    </>
  );
}

export default InputWithImage;
