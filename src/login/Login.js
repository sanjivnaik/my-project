import React, { useState } from 'react';
//import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
//import CheckButton from "react-validation/build/button";
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
//import AuthService from "../services/auth.service";

import PropTypes from 'prop-types';
import AuthService from '../services/AuthService';

export default function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const required = value => {
        if (!value) {
            return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
            );
        }
    };

    const handleSubmit = async e => {
        setError('');
        setIsLoading(true);
        e.preventDefault();
        await AuthService.loginUser({
            username,
            password
        }).then(res => {         
            saveToken(res.data);
            setIsLoading(false);
        }).catch(error => {
            setIsLoading(false);
            if (error.response.status === 401) {
                setError("Unauthorized");
            } else {
                setError(error.message);
            }
        });
    }

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(JSON.stringify(userToken));
    };

    return (
        <div className="col-md-4 offset-md-4">  
            <h1 className = "text-center"> Log in </h1>

            <Form>
                {error != '' && 
                <Alert variant="danger" onClose={() => setError('')} dismissible>
                    <Alert.Heading>{error}</Alert.Heading>
                </Alert>
                }

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
                    disabled={isLoading}
                    onClick={!isLoading ? handleSubmit : null}>
                        {isLoading ? 'Loading…' : 'Submit'}
                </Button>
            </Form>
        </div>        
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};