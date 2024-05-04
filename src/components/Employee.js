import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Employee = () => {


  const dataFromStore = useSelector(store => store.empObj);
  console.log(dataFromStore);

  const [employeeData, setEmployeeData] = useState({
    username: "",
    email: "",
    phone: "",
    company: "",
    address: ""
  });

  const [validationError, setValidationError] = useState({});

  const handleInputChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value })

  }

  let errMsg = {}
  const handleValidation = () => {
    let isValid = true;
    if (!employeeData || !employeeData.username || !employeeData.email || !employeeData.phone || !employeeData.company || !employeeData.address) {
      errMsg.required = "All Fields are required"
      isValid = false
      return isValid;
    }
    if (employeeData.email.split('@').length !== 2) {
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
        email: "",
        phone: "",
        company: "",
        address: ""
      })
      setValidationError({})
    }
    else {
      setValidationError(errMsg)
      console.log(errMsg)
    }
  }
  return (
    <>
      <h1>Add Employee</h1>


      <p>Data received from store</p>
      <p>{dataFromStore && dataFromStore.firstName}  </p>

      <form onSubmit={handleSumbit}>

        <label htmlFor='username'>Username : </label>
        <input type="text" id='username' name='username' placeholder='Username' value={employeeData.username} onChange={handleInputChange} /><br />

        <label htmlFor='email'>Email : </label>
        <input type="text" id='email' name='email' placeholder='Email' value={employeeData.email} onChange={handleInputChange} /><br />

        <label htmlFor='phone'>Phone : </label>
        <input type="number" id='phone' name='phone' placeholder='Phone' value={employeeData.phone} onChange={handleInputChange} /><br />


        <label htmlFor='company'>Company : </label>
        <input type="text" id='company' name='company' placeholder='Company' value={employeeData.company} onChange={handleInputChange} /><br />


        <label htmlFor='address'>Address : </label>
        <input type="text" id='address' name='address' placeholder='Address' value={employeeData.address} onChange={handleInputChange} /><br />

        <button>Add Employee</button>
        <br />
        {validationError && <span style={{ color: 'red' }}>{validationError.required || validationError.email || validationError.phone}</span>}
      </form>
    </>
  );
}

export default Employee;
