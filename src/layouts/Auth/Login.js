import Link from "next/link";
import React, { useState } from "react";
import { Form, Checkbox } from "antd";

export default function Login() {
  const [values, setValues] = useState({
    email: "admin@email.com",
    password: "1234",
  });

  const handleInputChange = (values) => (event) => {
    setValues((prevState) => {
      return { ...prevState, [values]: event.target.value };
    });
  };

  console.log(values);

  return (
    <div>
      <div className='container-scroller'>
        <div className='container-fluid page-body-wrapper full-page-wrapper'>
          <div className='content-wrapper d-flex align-items-center auth px-0'>
            <div className='row w-100 mx-0'>
              <div className='col-lg-4 mx-auto'>
                <div className='auth-form-light text-left py-5 px-4 px-sm-5'>
                  <div className='brand-logo'>
                    {/* <img src='../../images/logo.svg' alt='logo' /> */}
                    <h2 className='text-center'>LoveLetter</h2>
                  </div>
                  <h4>Hello! let&#39;s get started</h4>
                  <h6 className='font-weight-light'>Sign in to continue.</h6>

                  <form className='pt-3'>
                    <div className='form-group'>
                      <input
                        type='email'
                        className='form-control form-control-lg'
                        value={values.email}
                        onChange={handleInputChange("email")}
                        id='exampleInputEmail1'
                        placeholder='Username'
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='password'
                        value={values.password}
                        onChange={handleInputChange("password")}
                        className='form-control form-control-lg'
                        id='exampleInputPassword1'
                        placeholder='Password'
                      />
                    </div>
                    <div className='mt-3'>
                      <a
                        className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
                        href='../../index.html'
                      >
                        LOGIN
                      </a>
                    </div>
                    <div className='my-2 d-flex justify-content-between align-items-center'>
                      {/* <div className='form-check'>
                        <label className='form-check-label text-muted'>
                          <input type='checkbox' className='form-check-input' />
                          Keep me signed in
                        </label>
                      </div> */}
                      <Form.Item
                        name='remember'
                        valuePropName='checked'
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      >
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>
                      <Link href='#'>
                        <span className='auth-link text-black'>
                          Forgot password?
                        </span>
                      </Link>
                    </div>

                    <div className='text-center mt-4 font-weight-light'>
                      Don&#39;t have an account?{" "}
                      <a href='register.html' className='text-primary'>
                        Create
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
