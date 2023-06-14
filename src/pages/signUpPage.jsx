import React, { useState } from 'react'
import '../styles/pages/sign-up-page.scss';
// import Input from '../components/input';
import { useNavigate } from 'react-router-dom';
import InputWithPlaceholder from '../components/inputWithPlaceholder';
// import PhoneInput from 'react-phone-number-input';


function SignUpPage() {
    const [values, setValues] = useState({
        fName: '',
        lName: '',
        email: '',
        whatsappNum: ''
    })


    // const error = "";

    const handleInput = (e) => {
        console.log(values)
        setValues({...values, [e.target.name]: e.target.value })
    }

    const inputs = [
        {
            id:1,
            name: 'fName',
            type:'text',
            h5:'First Name',
            errorMessage: 'First name should be at least 3 letters',
            placeholder:'Emmanuel',
            value: values.fName,
            // pattern: `^[^\s@]+@[^\s@]+\.[^\s@]+$`,
            pattern: '^[a-zA-Z]{3,}$',
            required: true,
            // errorMessage: error 
        },
        {
            id:2,
            name: 'lName',
            type:'text',
            h5:'Last Name',
            // pattern: `^[^\s@]+@[^\s@]+\.[^\s@]+$`,
            pattern: '^[a-zA-Z]{3,}$',
            errorMessage: 'First name should be at least 3 letters',
            placeholder:'Joe',
            required: true,
            // errorMessage: error 
        },
        {
            id:3,
            name: 'email',
            type: 'email',
            h5:'Email',
            // errorMessage: 'It should be a valid email address!',
            // pattern: '^[^\s@]+@[^\s@]+\.[^\s@]+$',
            pattern: '/^(?![.-])((?![_.-][_.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/',
            placeholder:'johndoe@mail.com',
            errorMessage: 'First name should be at least 3 letters',
            // errorMessage: error,
            required: true
        },
        {
            id:4,
            name: 'whatsappNum',
            type:'number',
            h5:'Whatsapp Number',
            placeholder:'90100000000',
            errorMessage: 'First name should be at least 3 letters',
            pattern: '^\d{11}$',
            // errorMessage: error,
            // errorMessage: 'Your number should not exceed 11 digits and have other characters',
            required: true
        }
    ]


    const handleSubmit = (e) => {
        e.preventDefault();
        // const errors = {};
        // if (!values.fName) {
        //     errors.fName = "First Name is required"
        // }
        // if (!values.lName === ""){
        //     error = "Last name is required"
        // }
    
        // if (!values.email === ""){
        //     error = 'Email is required'
        // } 
    
        // if (!values.number === ""){
        //     error = 'whatsapp Number is required'
        // }
    }


    const router = useNavigate();
  return (
    <>
        <div className="main">
            <div className="main__container">
                <h3>GoNow</h3>
                <div className="main__container__content">
                    <img src="./image/welcome.svg" alt="" />
                    <h4>Sign up to create a task</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="main__container__content__inputs">
                            {inputs.map((input) => (
                                <InputWithPlaceholder onChange={handleInput} key={input.id} {...input}  />
                            ))}
                            {/* <PhoneInput
                                placeholder="Enter phone number"
                                defaultCountry='US'
                                style= {{ color: '#6E768A' }}
                                onChange={onChange}
                            /> */}
                        </div>
                        <button type='submit' className="main__container__content__btn" onClick={() => router('/task-option')} >Go Now</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUpPage
