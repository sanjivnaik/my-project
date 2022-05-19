import React, {useState, useEffect} from 'react';
import { Button, Container, Form, FormControl, InputGroup, Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService';

function ReadUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [canDelete, setDelete] = useState(false);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        setLoading(true);
        UserService.getUsers().then((response) => {
            if (response.status === 200) {
                setUsers(response.data);
                setLoading(false);
                console.log(response.data);
            }
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        });
    };

    const checkDelete = () => {
        console.log('checking');
    }

    return (
      <div>
          <h1 className = "text-center"> User List </h1>

          <Container>
          <div className="container h-100">
            <div className="d-flex h-100">
                <Button className='btn btn-primary col-2 me-2' as={Link} to={"/users/create"}>Create</Button>
                <Button className="btn btn-primary col-2" disabled>Delete</Button>
            </div>
          </div>

          <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                </tr>
            </thead>
              <tbody>
                {loading ? (
                    <tr>
                        <td rowSpan="4" colSpan="5">
                            <div className="text-center py-5">
                                <Spinner animation="border" variant="primary" />
                            </div>
                        </td>
                    </tr>
                ) : users.length > 0 ? (
                    users.map(users => 
                        <tr key = {users.id}>
                            <td> 
                                <Form.Check type="checkbox" name="entitySelection" 
                                onClick={checkDelete()}/>
                            </td>
                            <td> {users.id}</td>   
                            <td> {users.firstName}</td>   
                            <td> {users.lastName}</td>   
                            <td> {users.email}</td>   
                        </tr>
                    )
                ) : (
                    <tr>
                        <td colSpan="5">
                            <h5 className="text-danger text-center">No records found</h5>
                        </td>
                    </tr>
                )}
              </tbody>
          </Table>
          </Container>
      </div>
  )
}

export default ReadUsers;