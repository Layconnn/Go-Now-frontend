import React from 'react'
import '../styles/components/task-option.scss';
import { useState } from 'react';

function TaskOption(props) {

  
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (
    <>
        <div 
          className={isHovered ? 'task' : ''}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={props.onClick}
        >
            <div>
                <h6>{props.h6}</h6>
                <h5>{props.h5}</h5>
            </div>
            <img src="./image/check.svg" alt="" />
        </div>
    </>
  )
}

export default TaskOption
