import React, { useState } from 'react';
//import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Button, Col, Form, Row } from 'react-bootstrap';
//import AuthService from "../services/auth.service";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const required = value => {
        if (!value) {
            return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
            );
        }
    };

    const handleLogin = (e) => {

    }

    return (
        <div class="col-md-4 offset-md-4">  

            <h1 className = "text-center"> Log in </h1>
            <Form >

                <Form.Group as={Row} className="mb-3" controlId="firstName">
                    <Form.Label column sm={2}>
                    Username
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="Enter username" 
                        onChange={e => setUsername(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="lastName">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Enter password" 
                    onChange={e => setPassword(e.target.value)} />
                    </Col>
                </Form.Group>

                <Button
                    variant="primary" type='submit'
                    disabled={loading}
                    onClick={!loading ? handleLogin : null}>
                        {loading ? 'Loading…' : 'Submit'}
            </Button>
            </Form>
        </div>        
      );
}

export default Login;