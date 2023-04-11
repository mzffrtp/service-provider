import React from "react";
import { Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import CategoryBox from "./components/categoryBox";

export default function HomePage() {
    const { categoriesState } = useSelector((state) => state)
    return (
        <Container className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {
                categoriesState.categories.map((category, id) => {
                    return (
                        <Col key={id}>
                            <CategoryBox category = {category}/>
                        </Col>
                    )
                })
            }
        </Container>
    )
}