import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Nave() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Movies4Life</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Movies">Movies</Nav.Link>
        <Nav.Link href="#Add">Add Movies</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Nave;
