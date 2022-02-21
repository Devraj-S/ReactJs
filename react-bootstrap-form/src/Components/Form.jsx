import React from 'react';
import './Form.css';

export const Form = () => {
    return (
        <div class = "d-flex justify-content-center align-items-center">
            <div class="simple-login-container pt-3">
                <h2 class="mb-4">Login Form</h2>
                <div class="row">
                    <div class="col-md-12 form-group mb-4">
                        <input type="text" class="form-control" placeholder="Username" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group mb-4">
                        <input type="password" placeholder="Enter your Password" class="form-control" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group">
                        <input type="submit" class="btn btn-block btn-login" placeholder="Enter your Password" />
                    </div>
                </div>
            </div>
        </div>
    )
}
