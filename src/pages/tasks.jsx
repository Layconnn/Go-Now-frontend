import React from 'react'
import '../styles/pages/tasks.scss';
import InputWithPlaceholder from '../components/inputWithPlaceholder.jsx';
import InputWithImage from '../components/inputWithImage.jsx';
import { useNavigate } from 'react-router-dom';

function Tasks() {

  const router = useNavigate()

  return (
    <>
         <div className="tasks-page">
            <div className="tasks-page__container">
                <h3>GoNow</h3>
                <div className="tasks-page__container__contents">
                  <img src="./image/gee.svg" alt="" className='tasks-page__container__contents__image' />
                  <h4>Create a task</h4>
                  <h2>Single task with one location</h2>
                    <InputWithPlaceholder 
                      h5='Title'
                      placeholder='Kill the president'
                    />
                     {/* <div className="tasks-page__container__contents__input-one">
                      <div>
                        <h5>Location</h5>
                        <input
                          type="text"
                          placeholder='Aso Rock'
                          className='tasks-page__container__contents__input-one__main'
                        />
                      </div>
                      <img src='./image/locate.svg' alt="" className='tasks-page__container__contents__input-one__image' />
                    </div> */}
                    <InputWithImage 
                    h5='Location'
                    placeholder="Aso Rock"
                    placeholderColor='black'
                    src='./image/locate.svg'
                    />
                    <InputWithImage
                    h5="Time" 
                    placeholder='Set time'
                    placeholderColor='black'
                    src='./image/clock.svg'
                    /> 
                    <InputWithImage 
                    h5='Date'
                    placeholder='Task Date'
                    src='./image/calender.svg'
                    placeholderColor='black'
                    /> 
                    <div className="tasks-page__container__contents__text-area">
                      <h5>Description (Max 100 words)</h5>
                      <textarea type="text" placeholder='Description your task in simple and plain english' className='tasks-page__container__contents__text-area__item1' />
                    </div>
                    <div className="tasks-page__container__contents__btn" onClick={() => router('/task-creation')}>continue</div>
                    <div className="tasks-page__container__contents__info">Task may take up to 4 hours to complete</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tasks
