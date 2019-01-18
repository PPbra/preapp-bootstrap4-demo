import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className="login-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Đăng ký tài khoản</h5>
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                        <label for="inputEmail">Địa chỉ Email</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                        <label for="inputPassword">Mật khẩu</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                        <label for="inputPassword">Nhập lại mật khẩu</label>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Đăng ký</button>
                                    <hr className="my-4"></hr>
                                    <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i>Quay lại trang đăng nhập</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
