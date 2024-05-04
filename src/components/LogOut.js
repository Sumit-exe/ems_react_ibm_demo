import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = ({setIsLoggedIn}) => {
    const navigate = useNavigate()

    const handleLogOut=()=>{
        setIsLoggedIn(false)
        navigate('/login')
    }
    return (
        <div>
            <button onClick={()=>handleLogOut()}>LogOut</button>
        </div>
    );
}

export default LogOut;
