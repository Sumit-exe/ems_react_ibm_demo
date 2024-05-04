import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    
  const [employeeData, setEmployeeData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    company: "",
});

const [validationError, setValidationError] = useState({});
const navigate = useNavigate()

const handleInputChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value })
}

let errMsg = {}
const handleValidation = () => {
    let isValid = true;
    if (!employeeData || !employeeData.password || !employeeData.username || !employeeData.email || !employeeData.phone || !employeeData.company ) {
        errMsg.required = "All Fields are required"
        isValid = false
        return isValid;
    }
    if(employeeData.password.length < 4){
        errMsg.email = "Password must be atleast 4 letters long"
        isValid = false;
        return isValid
    }
    if(employeeData.email.split('@').length !==2){
        errMsg.email = "Enter a valid email Id"
        isValid = false;
        return isValid
    }
    if (employeeData.phone.toString().length !== 10) {
        errMsg.phone = "Phone Number should contain 10 numbers"
        isValid = false;
        return isValid
    }

    return isValid;
}

const handleSumbit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
        axios.post('https://jsonplaceholder.typicode.com/users', employeeData)
            .then((resp) => {
                console.log(resp.data);
            })
            .catch(error => {
                console.log(error)
            })

        setEmployeeData({
            username: "",
            password: "",
            email: "",
            phone: "",
            company: "",
        })
        setValidationError({})
        navigate("/login")
    }
    else{
        setValidationError(errMsg)
        console.log(errMsg)
    }
}
    return (
        <div>
            
          <form onSubmit={handleSumbit}>
            
          <label htmlFor='username'>Username : </label>
              <input type="text" id='username' name='username' placeholder='Username' value={employeeData.username} onChange={handleInputChange} /><br />


              <label htmlFor='password'>Password: </label>
              <input type="text" id='password' name='password' placeholder='Password' value={employeeData.password} onChange={handleInputChange} /><br />

              <label htmlFor='email'>Email : </label>
              <input type="text" id='email' name='email' placeholder='Email' value={employeeData.email} onChange={handleInputChange} /><br />

              
              <label htmlFor='phone'>Phone : </label>  
              <input type="number" id='phone'  name='phone' placeholder='Phone' value={employeeData.phone} onChange={handleInputChange} /><br />
              
              
              <label htmlFor='company'>Company : </label>
              <input type="text" id='company' name='company' placeholder='Company' value={employeeData.company} onChange={handleInputChange} /><br />

              <button>Register</button>
              <br/>
              {validationError && <span style={{color:'red'}}>{validationError.required ||validationError.password || validationError.email || validationError.phone }</span>}
          </form>
        </div>
    );
}

export default Register;
