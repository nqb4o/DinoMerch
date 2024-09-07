import React, { useState } from 'react';
import { handleRegisterApi } from '../../services/userService';
import { useNavigate } from "react-router-dom";
import { path } from '../../utils'
import Header from '../System/Header';

function Register() {
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await handleRegisterApi(userData.email, userData.password)
        console.log(res)
        if (!userData) {
            alert('Email or password is required')
        }
        if (res && res.token) {
            navigate(path.LOGIN);
        } else {
            if (res && res.status === 400) {
                alert(res.data.error)
            }
        }
    };
    return (
        <div className="register">
            <Header />
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
export default Register
