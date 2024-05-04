import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
    return (
        <div>
            <ul>
                {isLoggedIn && <li> <Link to={'/'}>Home</Link></li>}
                {!isLoggedIn && <li> <Link to={'/register'}>Register</Link></li>}
                {!isLoggedIn && <li> <Link to={'/login'}>Login</Link></li>}
                {isLoggedIn && <li> <Link to={'/logout'}>LogOut</Link></li>}
                {isLoggedIn && <li> <Link to={'/addemployee'}>Add Employee</Link></li>}
                {isLoggedIn && <li> <Link to={'/parent'}>Parent-Child-Example</Link></li>}
                {isLoggedIn && <li> <Link to={'/emplist'}>Show All Employees</Link></li>}
            </ul>
        </div>
    );
}

export default Navbar;
