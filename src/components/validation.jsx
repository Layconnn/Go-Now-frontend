
export default function Validation(values) {
    const errors = {};

    const email_pattern = /^(?![.-])((?![_.-][_.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

    const phone_pattern = /^\d{11}$/;

    if(values.name === ""){
        errors.name = "First Name is Required";
    }

    if(values.is_whatsapp === ""){
        errors.is_whatsapp = "Last Name is required";
    }

    if(values.email === ""){
        errors.email = "Email is required";
    }else if(!email_pattern.test(values.email)){
        errors.email = "Invalid email format";
    }
    if (values.phone === ""){
        errors.phone = "Your number is required";
    }else if(!phone_pattern.test(values.phone)){
        errors.phone = "Invalid phone number";
    }

    return errors;
}
