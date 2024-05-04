import React, { useEffect, useState } from 'react';
import axios from 'axios'

const EmpList = () => {

    const [empList, setEmpList] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                setEmpList(resp.data)
            })
        console.log(empList)
    }, []);

    return (
        <div>
            <h1>Emplist Component</h1>
            <hr />
            <div>
                {empList && empList.map((emp) => (
                    <div key={emp.id}>

                        <h3>{emp.name}</h3>
                        <p >{emp.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EmpList;
