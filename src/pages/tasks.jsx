import {React, useEffect, useState} from 'react'
import '../styles/pages/tasks.scss';
import Validation from '../components/validation';
import Api from '../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputWithPlaceholder from '../components/inputWithPlaceholder.jsx';
import InputWithImage from '../components/inputWithImage.jsx';
import { useNavigate } from 'react-router-dom';
import Options from '../components/options';

function Tasks() {
  const [isLoading, setIsLoading] = useState(false);
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [errors, setErrors] = useState({})
  const [text, setText] = useState('Task may take up to 36 hours to complete');
  

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if(currentHour >= 14){
      setText('Task may take up to 24 hours to complete')
    }
  }, []);

  const handleInput = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }


  const [values, setValues] = useState({
    title: "",
    time: "",
    date: "",
    description: "",
  })

  const handleSubmit = async(e) => {
    setTriedToSubmit(true);
    e.preventDefault();
    setErrors(Validation(values));
   
    if(values.title && values.time && values.date && values.description){
        setIsLoading(true);
        try{
            const res = await Api.post('http://localhost:5000/task', {
                title: values.title,
                time: values.time,
                date: values.date,
                description: values.description
              })

            console.log(res.data)
            console.log(res.data.token)
            
          }
          catch(err){
            console.log(err);
          }
          finally{
            toast.success('Task created successfully.')
            setIsLoading(false)
          }
    } else if(!values.title && !values.time && !values.date && !values.description){
        toast.error('form invalid')
    } 
}

  const router = useNavigate()

  return (
    <>
         <div className="tasks-page">
            <div className="tasks-page__container">
                <h3>GoNow</h3>
                <div className="tasks-page__container__contents">
                  <img src="./image/gee.svg" alt="" className='tasks-page__container__contents__image' />
                  <h4>Create a task</h4>
                  <h2>Single task in one location</h2>
                  <form onSubmit={handleSubmit} className="tasks-page__container__contents__inputs">
                    <div className="tasks-page__container__contents__inputs__fname">
                      <InputWithPlaceholder 
                        h5='Title'
                        name="title"
                        value={values.title}
                        onChange={handleInput}
                      />
                      {triedToSubmit && !values.title
                      &&
                      <span className="error">{errors.title}</span>
                      }
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
                      <div className="tasks-page__container__contents__inputs__fname">
                        <Options 
                        h5="Address"
                        other={values.address}
                        />
                        {/* {triedToSubmit && !values.address
                        &&
                        <span className="error">{errors.address}</span>
                        } */}
                      </div>
                      <div className="tasks-page__container__contents__inputs__fname">
                        <InputWithImage
                          name='time'
                          type='time'
                          h5="Preferred Time" 
                          src='./image/clock.svg'
                          value={values.time}
                          onChange={handleInput}
                        /> 
                        {triedToSubmit && !values.time
                        &&
                        <span className="error">{errors.time}</span>
                        }
                      </div>
                      <div className="tasks-page__container__contents__inputs__fname">
                        <InputWithImage 
                          name='date'
                          type='date'
                          h5='Preferred Date'
                          src='./image/calender.svg'
                          value={values.date}
                          onChange={handleInput}
                        /> 
                        {triedToSubmit && !values.date
                        &&
                        <span className="error">{errors.date}</span>
                        }
                      </div>
                      <div className="tasks-page__container__contents__inputs__fname">
                        <div className="tasks-page__container__contents__text-area">
                          <h5>Description (Max 100 words)</h5>
                          <textarea type="text" name='description' value={values.description} onChange={handleInput} placeholder='Description your task in simple and plain english' autoFocus className='tasks-page__container__contents__text-area__item1' />
                        </div>
                        {triedToSubmit && !values.description
                        &&
                        <span className="error">{errors.description}</span>
                        }
                      </div>
                      <button type='submit' className="tasks-page__container__contents__btn" >
                        {
                        isLoading && values.title && values.time && values.date && values.description
                        ?
                        <div className="tasks-page__container_contents__btn__loading"></div>
                        :
                        'continue'
                        }
                      </button>
                      <ToastContainer />
                    </form>
                    <div className="tasks-page__container__contents__info">{text}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tasks
