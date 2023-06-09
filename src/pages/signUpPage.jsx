import React from 'react'
import '../styles/pages/sign-up-page.scss';
import Input from '../components/input';
import { useNavigate } from 'react-router-dom';
import InputWithPlaceholder from '../components/inputWithPlaceholder';


function SignUpPage() {

    const router = useNavigate();
  return (
    <>
        <div className="main">
            <div className="main__container">
                <h3>GoNow</h3>
                <div className="main__container__content">
                    <img src="./image/welcome.svg" alt="" />
                    <h4>Sign up to create a task</h4>
                    <div className="main__container__content__inputs">
                        {/* <div className="main__container__content__inputs__one">
                            <h6>First Name</h6>
                            <h5>Emmanuel</h5>
                        </div> */}
                        <InputWithPlaceholder 
                        h5='First Name'
                        placeholder='Emmanuel'
                        />
                        {/* <div className="main__container__content__inputs__two">
                            <h6>Last Name</h6>
                            <h5>Joe</h5>
                        </div> */}
                        <InputWithPlaceholder 
                        h5="Last Name"
                        placeholder='Joe'
                        />
                        <Input placeholder='Email Address' type='email' />
                        <Input placeholder='Whatsapp Number' type='number' />
                    </div>
                    <div className="main__container__content__btn" onClick={() => router('/task-option')}>Go Now</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUpPage
