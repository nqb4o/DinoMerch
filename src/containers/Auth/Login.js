import React, { useState } from 'react';
import './Login.scss';
import logo from '../../assets/logo.svg';
import { handleLoginApi } from '../../services/userService';


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [errMessage, setErrMessage] = useState('')


    const handleOnChangeUsername = (event) => {
        setUsername(event.target.value);
        console.log(event.target.value);
    };

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        setErrMessage('');
        try {
            let data = await handleLoginApi(username, password)
            if (data && data.errCode !== 0) {
                setErrMessage(data.message)
            }
            if (data && data.errCode == 0) {
                this.props.userLoginSuccess(data.user)
                console.log("Login succeeds")
            }
        } catch (e) {
            if (e.response) {
                setErrMessage(e.response.data.message)
            }
            console.log(e.response)
        }
    }

    const handleShowHidePassword = () => {
        setIsShowPassword(!isShowPassword)
    }

        return (
            <div className='background'>
                <nav className="navbar">
                    <div className="navbar-left">
                        <a href='/'><img src={logo} alt='logo'/></a>
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
                            <div className="input-group">
                                <label htmlFor="username">Tên đăng nhập</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder=""
                                    value={username}
                                    onChange={handleOnChangeUsername}
                                />
                            </div>
                            <div className="input-group">
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
                            >
                                Đăng nhập
                            </button>
                            <div className="login-options">
                                <a href='/'>Gặp vấn đề với Đăng nhập</a>
                                <a href='/'>Quên mật khẩu</a>
                            </div>
                        </form>
                        <div className="guest-login">
                            <div className='guest-login-title'>
                                <div/>
                                <p>Không phải người của tổ chức</p>
                                <div/>
                            </div>
                            <button className="guest-button">Vào với tư cách khách</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login
