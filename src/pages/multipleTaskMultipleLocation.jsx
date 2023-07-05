import React from 'react'
import '../styles/pages/task-creation.scss'
import UploadDocs from '../components/uploadDocs';
import { useNavigate } from 'react-router-dom';

function MultipleTaskMultipleLocation() {

  const router = useNavigate()

  return (
    <>
        <div className="classic">
            <div className="classic__container">
                <h3>GoNow</h3>
                <div className="classic__container__content">
                    <img src="./image/gee.svg" alt="" className='classic__container__content__image' />
                    <h4>Create a task</h4>
                    <h6>Multiple tasks in Multiple locations</h6>
                    <UploadDocs 
                    src='./image/desk.svg'
                    h5='For single task with multiple location, you’d need to download an excel template and fill accordingly.'
                    h2='Click to download the template'
                    /> 
                    <div className="classic__container__content__btn">I have filled the sheet</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MultipleTaskMultipleLocation
