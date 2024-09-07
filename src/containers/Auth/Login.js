import React, { useState, useEffect } from 'react';
import './Login.scss';
import { handleLoginApi } from '../../services/userService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { path } from '../../utils'
import Header from '../System/Header';

function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [loadingAPI, setLoadingAPI] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate(path.HOME);
        }
    })

    const handleChange = (e) => {
        console.log(e)
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (event) => {
        setLoadingAPI(true)
        event.preventDefault();
        let res = await handleLoginApi(credentials.email, credentials.password)
        if (!credentials) {
            alert('Email or password is required')
        }
        if (res && res.token) {
            localStorage.setItem('token', res.token);
            navigate(path.HOME);
        } else {
            if (res && res.status === 400) {
                alert(res.data.error)
            }
        }
        setLoadingAPI(false)
    }

    const handleShowHidePassword = () => {
        setIsShowPassword(!isShowPassword)
    }

    return (
        <div className='background'>
            <Header />
            <div className="login-container">
                <div className="login-box">
                    <h2>Đăng nhập</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Tên đăng nhập (eve.holt@reqres.in)</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <div className="password-wrapper">
                                <input
                                    type={isShowPassword ? 'text' : 'password'}
                                    name="password"
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={handleShowHidePassword}>
                                    {isShowPassword ? "Ẩn" : "Hiện"}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="login-button"
                            disabled={credentials ? false : true}
                        >{loadingAPI && <FontAwesomeIcon icon={faSpinner} pulse />}
                            &nbsp;Đăng nhập
                        </button>
                        <div className="login-options">
                            <a href='/'>Quên mật khẩu</a>
                            <a href={path.REGISTER}>Đăng kí</a>
                        </div>
                    </form>
                    <div className="guest-login">
                        <div className='guest-login-title'>
                            <div />
                            <p>Không phải người của tổ chức</p>
                            <div />
                        </div>
                        <button className="guest-button">Vào với tư cách khách</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
