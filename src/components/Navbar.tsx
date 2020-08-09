import * as React from 'react';
import { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../store/AuthContext';
import './Navbar.scss';
import { auth } from '../config/firebase';

const Navigation = () => {
  const { user } = useContext(AuthContext)!;

  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <LinkContainer to="/">
        <Navbar.Brand>فضفضة</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="main-links ml-auto mr-lg-3 pr-lg-2">
          <LinkContainer to={user ? '/home' : '/'} exact>
            <Nav.Link active={false}>الرئيسية</Nav.Link>
          </LinkContainer>
        </Nav>

        <Nav className="mr-auto">
          {user ? (
            <>
              <Button onClick={() => auth.signOut()} variant="text-danger" className="ml-lg-1 mb-1 mb-lg-0">
                تسجيل الخروج
              </Button>
            </>
          ) : (
            <>
              <LinkContainer to="/login">
                <Button variant="text-primary" className="ml-lg-1 mb-1 mb-lg-0">
                  تسجيل الدخول
                </Button>
              </LinkContainer>
              <LinkContainer to="/register">
                <Button variant="text-primary">إنشاء حساب</Button>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
