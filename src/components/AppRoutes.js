import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Employee from './Employee';
import Parent from './Parent';
import Home from './Home';
import Navbar from './Navbar';
import EmpList from './EmpList';
import Register from './Register';
import LogOut from './LogOut';

const AppRoutes = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = ()=>{
        
    }

    return (
        <>
            <BrowserRouter>
                <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
                    <Route path="/logout" element={<LogOut setIsLoggedIn={setIsLoggedIn}/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/addemployee" element={<Employee />} />
                    <Route path="/parent" element={<Parent />} />
                    <Route path="/emplist" element={<EmpList />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRoutes;
