import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

import './login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Helmet title='SignIn'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className='fw-bold mb-4'>Sign In</h3>
                            <Form className='auth_form'>
                                <FormGroup className='form_group'>
                                    <p>Email Address*</p>
                                    <input 
                                        type="email"  
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </FormGroup>
                                <FormGroup className='form_group'>
                                <p>Password*</p>
                                    <input 
                                        type="password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                    />
                                <p className='forgot'>Forgot Password</p>
                                </FormGroup>
                                <FormGroup className='form_group'>
                                <button type='submit' className="auth_btn">
                                    <p>Sign In</p> 
                                </button>
                                <p>
                                    Don't have an account?
                                </p>
                                <button type='submit' className="buy_btn">
                                    <Link to='/signup'>
                                     <p>Create an account</p>
                                    </Link>
                                </button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <div className='sing-img'></div>
            </section>

        </Helmet>
    )
}

export default Login
