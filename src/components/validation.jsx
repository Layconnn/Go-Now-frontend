
export default function Validation(values) {
    const errors = {};

    const email_pattern = /^(?![.-])((?![_.-][_.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

    // const whatsapp_number_pattern = /^\d{11}$/;

    if(values.first_name === ""){
        errors.first_name = "First Name is Required";
    }

    if(values.last_name === ""){
        errors.last_name = "Last Name is required";
    }

    if(!values.title){
        errors.title = "Task Title is Required";
    }

    if(!values.time){
        errors.time = "Time is Required";
    }

    if(!values.date){
        errors.date = "Date is Required";
    }

    {
        !values.description
        ?
        errors.description = 'Description is required'
        :
        values.description.length !== 100
        ?
        errors.description = 'Task description must not be longer than 100 words'
        :
        ''
    }

    if(!values.address){
        errors.address = "Address is Required";
    }
    
    // if(values.email === ""){
    //     errors.email = "Email is required";
    // }else if(!email_pattern.test(values.email)){
    //     errors.email = "Invalid email format";
    // }

    {
        !values.email
        ?
        errors.email = 'Email is required'
        :
        values.email
        ?
        errors.email = 'Enter a valid email address'
        :
        ''
    }

    {
        !values.whatsapp_number
        ?
        errors.whatsapp_number = 'Your phone number is required'
        :
        values.whatsapp_number.length !== 14
        ?
        errors.whatsapp_number = 'Please enter a valid number'
        :
        ''
    }

    // if (values.whatsapp_number === ""){
    //     errors.whatsapp_number = "Your number is required";
    // }else if(!whatsapp_number_pattern.test(values.whatsapp_number)){
    //     errors.whatsapp_number = "Invalid phone number";
    // }

    return errors;
}
