import {React, useEffect, useState } from 'react'
import '../styles/pages/tasks.scss';
import InputWithPlaceholder from '../components/inputWithPlaceholder.jsx';
import InputWithImage from '../components/inputWithImage.jsx';
import { useNavigate } from 'react-router-dom';

function SingleTaskMultipleLocation() {
  const [text, setText] = useState('Task may take up to 36 hours to complete');
  
  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    
    if(currentHour >= 14){
      setText('Task may take up to 24 hours to complete')
    }
  }, []);

  const router = useNavigate()

  return (
    <>
         <div className="tasks-page">
            <div className="tasks-page__container">
                <h3>GoNow</h3>
                <div className="tasks-page__container__contents">
                  <img src="./image/gee.svg" alt="" className='tasks-page__container__contents__image' />
                  <h4>Create a task</h4>
                  <h2>Single task in Multiple locations</h2>
                  <form  className="tasks-page__container__contents__inputs"></form>
                  <div className="tasks-page__container__contents__inputs__fname">
                    <InputWithPlaceholder 
                      h5='Title'
                    />
                  </div>
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
                      h5='Addresses'
                      src='./image/locate.svg'
                      />
                      <InputWithImage
                      h5="Preferred Time" 
                      src='./image/clock.svg'
                      /> 
                      <InputWithImage 
                      h5='Preferred Date'
                      src='./image/calender.svg'
                      /> 
                    <div className="tasks-page__container__contents__text-area">
                      <h5>Description (Max 100 words)</h5>
                      <textarea type="text" placeholder='Description your task in simple and plain english' className='tasks-page__container__contents__text-area__item1' />
                    </div>
                    <div className="tasks-page__container__contents__btn" >continue</div>
                    <div className="tasks-page__container__contents__info">{text}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleTaskMultipleLocation
