import React from 'react'
import '../styles/pages/task-creation3.scss';
import UploadDocs from '../components/uploadDocs';

function TaskCreation3() {
  return (
    <>
        <div className="task3">
            <div className="task3__container">
                <h3>GoNow</h3>
                <div className="task3__container__content">
                    <img src="./image/gee.svg" alt="" className='task3__container__content__image' />
                    <h4>Create a task</h4>
                    <h6>Single task with multiple location</h6>
                    <UploadDocs 
                    src='./image/icloud.svg'
                    h5='Have you filled the sheet?'
                    h2='Click to upload document or drag and drop'
                    /> 
                    <div className="task3__container__content__btn">Create task</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TaskCreation3
