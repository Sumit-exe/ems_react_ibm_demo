import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsLoggedIn}) => {
    const dummyCreds = {
        username:'sonu',
        password:'sonu'
    }
    const [loginCerdentials, setloginCerdentials] = useState({username:'',password:''});
    const navigate = useNavigate()
    const handleLogin =(e)=>{
        setloginCerdentials({
            ...loginCerdentials,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(loginCerdentials.username === dummyCreds.username && loginCerdentials.password === dummyCreds.password){
            alert('Login successful')
            setIsLoggedIn(true)
            navigate("/")
        }else alert("invalid credentials")
    }

    return (
        <>
            <h1>Login Component</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username : </label>
                <input type="text" id='username' name="username" value={loginCerdentials.username} onChange={handleLogin} />
                <br/>
                <label htmlFor='password'>Password : </label>
                <input type="text" id='password' name="password" value={loginCerdentials.password} onChange={handleLogin} />
                <br/>
                <button>Login</button>
            </form>

            <p>username :{loginCerdentials.username}</p>
            <p>password :{loginCerdentials.password}</p>
        </>
    );
}

export default Login;
