import { Navbar, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";

export default function NavUserInfo({ setLoggedIn }) {
    
    const handleLogout = () => {
        sessionStorage.clear();
        setLoggedIn(false);    
    }

    const userInfo = sessionStorage.getItem('user');
    let user = {firstName:"", lastName:""};
    if (userInfo !== null) {
        user = JSON.parse(userInfo);
    }
    return (
        <Nav>
            <Navbar.Text>
                Signed in as: <b>{user.firstName} {user.lastName}</b>
            </Navbar.Text>
            <Navbar.Text>&nbsp;&nbsp;|</Navbar.Text>
            <Nav.Link as={Link} onClick={handleLogout} to={"/"}>Logout</Nav.Link>
        </Nav>
    )
}