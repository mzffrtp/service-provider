import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted">© by muzaffer t 2023</small>
          </div>
          <div className="col-9 col-md">
            <h5>About</h5>
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
        </div>
      </footer>
    </Container>
  )
}