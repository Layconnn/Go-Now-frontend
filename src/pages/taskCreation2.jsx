import React from 'react'
import UploadDocs from '../components/uploadDocs';
import '../styles/pages/task-creation2.scss';
import { useNavigate } from 'react-router-dom';

function TaskCreation2() {

    const router = useNavigate()
  return (
    <>
         <div className="task2">
            <div className="task2__container">
                <h3>GoNow</h3>
                <div className="task2__container__content">
                    <img src="./image/gee.svg" alt="" className='task2__container__content__image' />
                    <h4>Create a task</h4>
                    <h6>Single task with multiple location</h6>
                    <UploadDocs 
                    src='./image/icloud.svg'
                    h5='Have you filled the sheet?'
                    h2='Click to upload document or drag and drop'
                    /> 
                    <div className="task2__container__content__btn" onClick={() => router('/task-creation3')}>Done</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TaskCreation2
