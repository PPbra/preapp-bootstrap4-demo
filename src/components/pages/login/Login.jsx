import React, { Component } from 'react';
import './Login.css';
import AuthenService from '../../../services/AuthenService';
import { withRouter } from "react-router-dom";

class Login extends Component {
    _handleLogin = () => {
        AuthenService.setUserInfo({ email: "aa" });
    }
    render() {
        return (
            <div className="login-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Đăng nhập</h5>
                                    <div className="form-label-group">
                                        <input 
                                            type="email" 
                                            id="inputEmail" 
                                            className="form-control" 
                                            placeholder="Email" 
                                            required autofocus 
                                            onKeyDown={(e)=>{
                                                if(e.keyCode===13){
                                                    this._handleLogin();
                                                }
                                            }}
                                            />
                                        <label for="inputEmail">Địa chỉ Email</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input 
                                            type="password" 
                                            id="inputPassword" 
                                            className="form-control" 
                                            placeholder="Mật khẩu" 
                                            required 
                                            onKeyDown={(e)=>{
                                            if(e.keyCode===13){
                                                this._handleLogin();
                                            }
                                        }}/>
                                        <label for="inputPassword">Mật khẩu</label>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={() => {
                                        this._handleLogin()
                                    }}>Đăng nhập</button>
                                    <hr className="my-4"></hr>
                                    <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i>Quên mật khẩu</button>
                                    <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit" onClick={(e)=>{
                                        e.preventDefault();
                                        this.props.history.push("/register");
                                        
                                    }}><i className="fab fa-facebook-f mr-2" ></i> Đăng ký</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(Login);