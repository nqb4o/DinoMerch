import React, { useState, useEffect } from 'react';
import './Login.scss';
import logo from '../../assets/logo.svg';
import { handleLoginApi } from '../../services/userService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { path } from '../../utils'


function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [loadingAPI, setLoadingAPI] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            navigate(path.HOME);
        }
    })

    const handleOnChangeUsername = (event) => {
        setUsername(event.target.value);
        console.log(event.target.value);
    };

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleLogin = async (event) => {
        setLoadingAPI(true)
        event.preventDefault();
        let res = await handleLoginApi(username, password)
        if (!username || !password) {
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
            <nav className="navbar-login">
                <div className="navbar-left">
                    <a href='/'><img src={logo} alt='logo' /></a>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li><a href='/'>Đăng nhập</a></li>
                        <li><a href='/'>Khách</a></li>
                    </ul>
                </div>
            </nav>
            <div className="login-container">
                <div className="login-box">
                    <h2>Đăng nhập</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="username">Tên đăng nhập (eve.holt@reqres.in)</label>
                            <input
                                type="text"
                                id="username"
                                placeholder=""
                                value={username}
                                onChange={handleOnChangeUsername}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <div className="password-wrapper">
                                <input
                                    type={isShowPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder=""
                                    value={password}
                                    onChange={handleOnChangePassword}
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
                            disabled={username && password ? false : true}
                        >{loadingAPI && <FontAwesomeIcon icon={faSpinner} pulse />}
                            &nbsp;Đăng nhập
                        </button>
                        <div className="login-options">
                            <a href='/'>Gặp vấn đề với Đăng nhập</a>
                            <a href='/'>Quên mật khẩu</a>
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
