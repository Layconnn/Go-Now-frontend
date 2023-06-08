import React from 'react'
import '../styles/components/task-option.scss';

function TaskOption(props) {
  return (
    <>
        <div className='task'>
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
