import React, { useState } from 'react'
import '../styles/pages/sign-up-page.scss';
// import Input from '../components/input';
import { useNavigate } from 'react-router-dom';
import Api from '../api/api';
import InputWithPlaceholder from '../components/inputWithPlaceholder';
import Validation from '../components/validation';
import CountryInput from '../components/countryInput';

function SignUpPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [triedToSubmit, setTriedToSubmit] = useState(false);
    // const [firstNameError, setFirstNameError] = useState("");
    // const [lastNameError, setLastNameError] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [whatsappError, setWhatsappError] = useState("");
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        whatsapp_number: ""
    })

    // const error = "";
    const [errors, setErrors] = useState({})
    const handleInput = (e) => {
        setValues({...values, [e.target.name]: e.target.value })
    }

    const email_pattern = /^(?![.-])((?![_.-][_.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

    // const inputs = [
    //     {
    //         id:1,
    //         name: 'fName',
    //         type:'text',
    //         h5:'First Name',
    //         // errorMessage: 'First name should be at least 3 letters',
    //         placeholder:'Emmanuel',
    //         errorMessage: firstNameError,
    //         value: values.fName,
    //         // pattern: `^[^\s@]+@[^\s@]+\.[^\s@]+$`,
    //         pattern: '^[a-zA-Z]{3,}$',
    //         required: true,
    //         // errorMessage: error 
    //     },
    //     {
    //         id:2,
    //         name: 'lName',
    //         type:'text',
    //         h5:'Last Name',
    //         // pattern: `^[^\s@]+@[^\s@]+\.[^\s@]+$`,
    //         pattern: '^[a-zA-Z]{3,}$',
    //         // errorMessage: 'Last name should be at least 3 letters',
    //         errorMessage: lastNameError,
    //         value: values.lName,
    //         placeholder:'Joe',
    //         required: true,
    //         // errorMessage: error 
    //     },
    //     {
    //         id:3,
    //         name: 'email',
    //         type: 'email',
    //         h5:'Email',
    //         // errorMessage: 'It should be a valid email address!',
    //         // pattern: '^[^\s@]+@[^\s@]+\.[^\s@]+$',
    //         pattern: '/^(?![.-])((?![_.-][_.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/',
    //         placeholder:'johndoe@mail.com',
    //         value: values.email,
    //         // errorMessage: 'It is not a valid email',
    //         errorMessage: emailError,
    //         // errorMessage: error,
    //         required: true
    //     },
    //     {
    //         id:4,
    //         name: 'whatsappNum',
    //         type:'tel',
    //         h5:'Whatsapp Number',
    //         placeholder:'90100000000',
    //         // errorMessage: 'Phone number should not be more or less than 11 digits',
    //         pattern: '^\d{11}$',
    //         value: values.errorMessage,
    //         errorMessage: whatsappError,
    //         // errorMessage: error,
    //         // errorMessage: 'Your number should not exceed 11 digits and have other characters',
    //         required: true
    //     }
    // ]

    const router = useNavigate();

    const handleSubmit = async(e) => {
        setTriedToSubmit(true);
        e.preventDefault();
        setErrors(Validation(values));
       
        if(values.first_name && values.whatsapp_number && values.email && values.last_name){
            setIsLoading(true);
            try{
                const res = await Api.post('http://localhost:5000/signup', {
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                    whatsapp_number: values.whatsapp_number,
                  })
                console.log(res.data)
              }
              catch(err){
                console.log(err);
              }
              finally{
                router('/task-option')
                setIsLoading(false)
              }
        } else if(!values.first_name && !values.whatsapp_number && !values.email && !values.last_name){
            errors
        } else{
            router('./task-option')
        }
    }

    
  return (
    <>
        <div className="main">
            <div className="main__container">
                <h3>GoNow</h3>
                <div className="main__container__content">
                    <img src="./image/welcome.svg" className='main__container__content__image' alt="" />
                    <h4>Sign up to create a task</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="main__container__content__inputs">
                            <div className="main__container__content__inputs__fname">
                                <InputWithPlaceholder 
                                name= 'first_name'
                                type='text'
                                onChange= {handleInput}
                                value= {values.first_name}
                                h5='First Name'
                                />
                                {triedToSubmit && !values.first_name
                                &&
                                <span className="error">{errors.first_name}</span>
                                }
                                {/* {errors.name && <span className='error' >{errors.first_name}</span> } */}
                            </div>

                            <div className="main__container__content__inputs__lname">
                                <InputWithPlaceholder 
                                name= 'last_name'
                                type='text'
                                value= {values.last_name}
                                onChange= {handleInput}
                                h5='Last Name'
                                // pattern= '^[a-zA-Z]{3,}$'
                                />
                                {triedToSubmit && !values.last_name
                                &&
                                <span className="error">{errors.last_name}</span>
                                }
                            </div>
                           
                           <div className="main__container__content__inputs__email">
                            <InputWithPlaceholder
                                // pattern= '/^(?![.-])((?![_.-][_.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/'
                                name= 'email'
                                type= 'email'
                                onChange= {handleInput}
                                value= {values.email}
                                h5='Email'
                                />
                                {triedToSubmit && !email_pattern.test(values.email)
                                &&
                                    <span className="error">{errors.email}</span>
                                }
                                {/* {errors.email && <span className='error' >{errors.email}</span> } */}
                           </div>
                           
                           {/* <div className="main__container__content__inputs__phone">
                            <InputWithPlaceholder 
                                // pattern= '^\d{11}$'
                                name= 'whatsappNum'
                                type= 'tel'
                                h5= 'Whatsapp Number'
                                onChange= {handleInput}
                                placeholder ='90100000000'
                                value= {values.whatsappNum}
                                />
                                {errors.whatsappNum && <span style={{color: "red", fontFamily: "Lexend", marginBottom: "1rem", paddingTop: '0.8rem',  transition: 'opacity 0.5s ease', opacity: '1'}} >{errors.whatsappNum}</span> }
                           </div> */}
                           <div className="main__container__content__inputs__phone">
                                <CountryInput 
                                        name= 'phone'
                                        h5= 'Whatsapp Number'
                                        onChange= {(value) => setValues({...values, whatsapp_number: value})}
                                        placeholder ='90100000000'
                                        type='tel'
                                        value= {values.whatsapp_number}  
                                />
                                 {triedToSubmit && values.whatsapp_number?.length !== 14
                                &&
                                    <span className="error">{errors.whatsapp_number}</span>
                                }
                                  {/* {errors.whatsapp_number && <span className='error' >{errors.whatsapp_number}</span> } */}

                           </div>
                        </div>
                        <button type='submit' className="main__container__content__btn">
                        {
                            isLoading && values.first_name && values.email && values.last_name && values.whatsapp_number
                            ?
                            <div className="main__container__content__btn__loading"></div>
                            :
                            'Go Now'
                        }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUpPage
