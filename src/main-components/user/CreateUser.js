import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import UserService from '../../services/UserService';

function CreateUser() { 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
   
    const handleSubmit = () => {
      setLoading(true);
      setIsError(false);
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email
      }

      UserService.createUser(data).then(res => {
        setData(res.data);
        setFirstName('');
        setLastName('');        
        setEmail('');
        setLoading(false);
      }).catch(err => {
        setLoading(false);
        setIsError(true);
      });
    }
   
    return (
      <div>
        {data && (
          <Navigate to="/users" replace={true} />
        )}

        <h1 className = "text-center"> Create User </h1>

        <Container>
        <Form>
            {isError && 
            <Alert variant="danger" onClose={() => setIsError(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                Please try after sometimes
                </p>
            </Alert>
            }

            <Form.Group as={Row} className="mb-3" controlId="firstName">
                <Form.Label column sm={2}>
                First Name
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Enter first name" 
                    onChange={e => setFirstName(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="lastName">
                <Form.Label column sm={2}>
                Last Name
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Enter last name" 
                   onChange={e => setLastName(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="email">
                <Form.Label column sm={2}>
                Email Address
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Enter email" 
                    onChange={e => setEmail(e.target.value)} />
                </Col>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Button className='btn btn-primary col-2 me-2'
                variant="primary" type='reset' as={Link} to={"/users"}>
                   Go Back
            </Button>

            <Button className='btn btn-primary col-2'
                variant="primary" type='submit'
                disabled={loading}
                onClick={!loading ? handleSubmit : null}>
                    {loading ? 'Loading…' : 'Submit'}
            </Button>

            </Form>
        </Container>        
        </div>        
    );
  }
   
  export default CreateUser;