import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import useApi from "../../hooks/useApi";

export default function LoginPage() {
    const api = useApi();


    const handleSubmit = (e) => {
        e.preventDefault();

        const jsonData = new FormData(e.target)
        const jsonForm = Object.fromEntries(jsonData.entries());

        api
            .post("auth/login", jsonForm)
            .then((res) => {
                console.log(">> Api Resp", response);
                toast.success('Login successfull!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

            })
            .catch(err => {
                console.error(err)
                toast.error('An error occured!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            })
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-center my-3 ">
                    <Col sm="8" lg="5" xl="4">
                        <Form.Group>
                            <Form.Label>E-mail:</Form.Label>
                            <Form.Control type="email" name="email" className="mb-3"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label >Password:</Form.Label>
                            <Form.Control type="password" name="password" ></Form.Control>
                        </Form.Group>
                        <Container className="d-flex justify-content-center">
                            <Button className="my-3" variant="outline-success">Submit</Button>
                        </Container>
                    </Col>
                </Row>
            </Form>
        </>
    )
}