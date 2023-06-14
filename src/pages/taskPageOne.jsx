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
                    <h2>Single task with one location</h2>
                    <TaskOption 
                    h6="Single task with one location "
                    h5="Sample question goes here "
                    onClick={() => router('/task-page')}
                    />
                    <div className="start__container__content__inputs"  onClick={() => router('/task-page')}>
                        <div className="start__container__content__inputs__body">
                            <h6>Single task with many locations</h6>
                            <h5>Sample question goes here </h5>
                        </div>
                        <img src="./image/check.svg" alt="" />
                    </div>
                    <TaskOption 
                    h6="Multiple tasks in a single location"
                    h5="Sample question goes here"
                    />
                    <TaskOption 
                    h6="Multiple tasks in a multiple location"
                    h5="Sample question goes here "
                    />
                    <div className="start__container__content__btn" onClick={() => router('/task-page')}>continue</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TaskPageOne
