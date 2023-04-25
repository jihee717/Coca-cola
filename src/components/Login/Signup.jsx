import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

import './login.css'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Helmet title='Signup'>    
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                                <h3 className='fw-bold mb-4'>Create an Account</h3>
                            <Form className='auth_form'>
                                <FormGroup className='form_group'>
                                    <p>Username*</p>
                                    <input 
                                        type="text" 
                                        value={username} 
                                        onChange={(e) => setUsername(e.target.value)} 
                                    />
                                </FormGroup>
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
                                </FormGroup>
                                <FormGroup className='form_group'>
                                <button type='submit' className="buy_btn auth_btn">
                                    <p>Create an Account</p>
                                </button>
                                <p>Already have an account?</p>
                                    <button type='submit' className="auth_btn">
                                        <Link to='/login'>
                                            <p>Sign In</p> 
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

export default Signup
