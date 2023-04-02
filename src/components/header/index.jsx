import React from "react";
import { Link} from "react-router-dom";


/* styling */
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";


export default function Header() {
  return (
   <Container>
     <div className="d-flex justify-content-between flex-md-row align-items-center p-1 px-md-4 mb-3 my-2 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">Service Place</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 btn btn-outline-info text-dark me-2" href="#">Services</Link>
        <Button variant="outline-info" className="p-2 text-dark me-2" href="#">Moogle</Button>
      </nav>
      <nav>
      <Link 
      to="auth/login"
      className="btn btn-outline-warning me-2" >Login</Link>
      <Link 
      to="auth/register"
      className="btn btn-outline-warning me-2" >Register</Link>
      </nav>
    </div>
   </Container>
  )
}