import React from 'react'
import '../styles/pages/task-page-one.scss';
import TaskOption from '../components/taskOption';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TaskPageOne() {

  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  const router = useNavigate();

  return (
    <>
        <div className="start">
            <div className="start__container">
                <h3>GoNow</h3>
                <div className="start__container__content">
                    <img src="./image/gee.svg" alt="" />
                    <h1>Create a task</h1>
                    <h2>Select a type of task you want to create</h2>
                    <TaskOption 
                    h6="Single task in one location "
                    h5="Sample question goes here "
                    onClick={() => router('/task-page')}
                    />
                    <div className="start__container__content__inputs"  onClick={() => router('/task-creation5')}>
                        <div className="start__container__content__inputs__body">
                            <h6>Single task in Multiple locations</h6>
                            <h5>Sample question goes here </h5>
                        </div>
                        <img src="./image/check.svg" alt="" />
                    </div>
                    <TaskOption 
                    h6="Multiple tasks in one location"
                    h5="Sample question goes here"
                    onClick={() => router('/task-creation')}
                    />
                    <TaskOption 
                    h6="Multiple tasks in Multiple locations"
                    h5="Sample question goes here "
                    onClick={() => router('/task-creation4')}
                    />
                    <div className="start__container__content__btn" onClick={() => router('/task-page')}>continue</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TaskPageOne
