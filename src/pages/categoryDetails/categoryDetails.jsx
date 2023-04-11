import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";
import { useState } from "react";
import { Col, Container, Card, Row } from "react-bootstrap";

export default function CategoryDetails() {
    const params = useParams();
    const api = useApi();
    const [categoryDetails, setCategoryDetails] = useState(null);
    const [blogs, setBlogs] = useState(null);
    const [services, setServices] = useState(null);


    useEffect(() => {
        api
            .get(`public/categories/getBySlug/${params.slug}`)
            .then((res) => {
                setCategoryDetails(res.data.data.category);
                setBlogs(res.data.data.blogs);
                setServices(res.data.data.services);
            })
            .catch((err) => {
                console.error(err)
                toast.error('An error occured when loading details. Please try again later!', {
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
    }, [])

    if (categoryDetails === null) {
        return (
            <>
                <h2 className="text-center">Loading...</h2>
            </>
        );
    }
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Card className="mb-4 rounded-3 shadow-sm border-info w-75 justify-content-center">
                    <Card.Header><strong>Service Name:</strong> {categoryDetails.name}</Card.Header>
                    <Card.Text className="m-3"><strong>Status:</strong> {categoryDetails.status.toUpperCase()}</Card.Text>
                    <Card.Footer><strong>Last Update:</strong> {categoryDetails.updated_at}</Card.Footer>
                </Card>
            </Row>
            <Row>
                {
                    console.log(setBlogs, blogs)
                    // TODO: error with th service, blogs cannot be fetched

                   /* blogs.map((blog,id)=>{
                        <Card className="mb-4 rounded-3 shadow-sm border-info w-75 justify-content-center">
                        <Card.Header><strong>Title:</strong> {blog.title.toUpperCase()}</Card.Header>
                        <Card.Text className="m-3"><strong>Status:</strong> {blog.content}</Card.Text>
                        <Card.Img>{blog.image}</Card.Img>
                        <Card.Footer><strong>Last Update:</strong> {categoryDetails.updated_at}</Card.Footer>
                    </Card> 
                    })
                    */
                }
            </Row>
        </Container>


    )
}