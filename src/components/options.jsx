import React from "react";
import { useState, useEffect } from "react";
import Api from "../api/api";
import "../styles/components/input-with-placeholder.scss";

function Options(props) {
  const [showElement, setShowElement] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowElement(true);
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setShowElement(false);
      setShowDropdown(false)
    } else {
      ("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (inputValue) {
        setShowDropdown(true);
        setIsLoading(true)
        try {
          const response = await Api.get(`http://localhost:5000/locations?search=${inputValue}`);
          console.log(response.data.rows)
          setOptions(response.data.rows)
        //   if (Array.isArray(response.data) && inputValue) {
        //     setOptions(response.data);
        //   } else if(inputValue === '') {
        //     setOptions([]);
        //     setShowDropdown(false)
        //   } 
        } catch (error) {
          console.log(error);
        } finally{
            setIsLoading(false)
        }
      } else if(inputValue === '') {
        setOptions([]);
        setShowDropdown(false);
      }
    };

    fetchData();
  }, [inputValue]);

//   const other = props.value

  //   const handleInputChange = (event) => {
  //     const value = event.target.value;
  //     setInputValue(value);

  //     if (value.length > 0) {
  //       setShowDropdown(true);
  //     } else {
  //       setShowDropdown(false);
  //     }
  //   };


  return (
    <>
      <div
        className={`constant-placeholder ${showElement ? "show-content" : ""}`}
        onClick={handleClick}
      >
        <h5
          className={`constant-placeholder__label ${
            showElement ? "show-contents__label" : ""
          }`}
        >
          {props.h5}
        </h5>
        {showElement && (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlur}
            autoFocus
            // pattern={props.pattern}
            className={`constant-placeholder__input-two ${
              showElement ? "show-content__input-two" : ""
            }`}
          />
        )}
        {showDropdown
            &&
          <div className="options-dropdown">
            {
              options.length > 0
            ? 
            options.map((option) => {
              return(
                <div
                  className="option"
                  key={option.id}
                  onClick={() => {setShowDropdown(false); setInputValue(option.name)}}
                >
                    {
                        isLoading
                        ?
                        <div className="loading"></div>
                        :
                        option.name
                    }
                </div>
              )
            })
            :
            <h5 className="loss">No result...</h5>
            } 
          </div>
        }
      </div>
    </>
  );
}

export default Options;
