import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthTokenContext } from "../context/authTokenContextProvider";

export default function Footer() {
  const AuthTokenContextValue = useContext(AuthTokenContext)
  return (
    <Container>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="d-flex flex-column align-middle">
          <div className="col-12 col-md d-flex flex-column ">
            <h5 className="text-center">About</h5>
            <div className="d-flex gap-3">
              <Link
                to={"https://www.linkedin.com/in/muzaffer-topgul-987670252/"}
                className="btn btn-outline-danger w-50">Linkedin</Link>
              <Link
                to={"https://github.com/mzffrtp"}
                className="btn btn-outline-warning w-50">Github</Link>
              <Link
                to={"mailto:mzffr.tpgl@gmail.com"}
                className="btn btn-outline-dark w-50">Contact</Link>
            </div>
          </div>
          <div className="col-12 col-md">
            <small className="d-block my-3 text-center text-muted">© by muzaffer t 2023</small>
          </div>
        </div>
      </footer>
    </Container>
  )
}