import Link from "next/link";
import React, { useState } from "react";
import { Form, Checkbox } from "antd";

export default function Login() {
  const [values, setValues] = useState({
    email: "admin@email.com",
    password: "1234",
  });

  const handleInputChange = (event )= (value) => {

    // setInputValue(event.target.value);
  });

  return (
    <div>
      <div class='container-scroller'>
        <div class='container-fluid page-body-wrapper full-page-wrapper'>
          <div class='content-wrapper d-flex align-items-center auth px-0'>
            <div class='row w-100 mx-0'>
              <div class='col-lg-4 mx-auto'>
                <div class='auth-form-light text-left py-5 px-4 px-sm-5'>
                  <div class='brand-logo'>
                    {/* <img src='../../images/logo.svg' alt='logo' /> */}
                    <h2 className='text-center'>LoveLetter</h2>
                  </div>
                  <h4>Hello! let&#39;s get started</h4>
                  <h6 class='font-weight-light'>Sign in to continue.</h6>

                  <form class='pt-3'>
                    <div class='form-group'>
                      <input
                        type='email'
                        class='form-control form-control-lg'
                        value={values.email}
                        onChange={handleInputChange("email")}
                        id='exampleInputEmail1'
                        placeholder='Username'
                      />
                    </div>
                    <div class='form-group'>
                      <input
                        type='password'
                        value={values.password}
                        onChange={handleInputChange("password")}
                        class='form-control form-control-lg'
                        id='exampleInputPassword1'
                        placeholder='Password'
                      />
                    </div>
                    <div class='mt-3'>
                      <a
                        class='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
                        href='../../index.html'
                      >
                        LOGIN
                      </a>
                    </div>
                    <div class='my-2 d-flex justify-content-between align-items-center'>
                      {/* <div class='form-check'>
                        <label class='form-check-label text-muted'>
                          <input type='checkbox' class='form-check-input' />
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
                        <span class='auth-link text-black'>
                          Forgot password?
                        </span>
                      </Link>
                    </div>

                    <div class='text-center mt-4 font-weight-light'>
                      Don&#39;t have an account?{" "}
                      <a href='register.html' class='text-primary'>
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
