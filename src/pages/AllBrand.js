import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from '../pages/Delete';
import axiosBaseURL from '../pages/enviroment';

function AllBrand() {
    const navigate = useNavigate();
    const [superAllbrand, setsuperAllbrand] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [itemToDeleteId, setItemToDeleteId] = useState(0);
    useEffect(() => {
        axiosBaseURL.get('/all').then((response) => {
            setsuperAllbrand((data) => {
            return response.data;
            console.log(response.data);
          });
        });
      }, []);
      function confirmDeleteHandler() {
        
        axiosBaseURL.delete(`/delete/${itemToDeleteId}`)
          .then((response) => {
            setShowModal(false);
            setsuperAllbrand((existingData) => {
              return existingData.filter((_) => _.id !== itemToDeleteId);
            });
            setItemToDeleteId(0);
          });
      }
      function showConfirmDeleteHandler(id) {
        setShowModal(true);
        setItemToDeleteId(id);
      }
      function hideConfirmDeleteHandler() {
        setShowModal(false);
        setItemToDeleteId(0);
      }
      return (
        <>
         <>
        <DeleteConfirmation
        showModal={showModal}
        title="Delete Confirmation"
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}
        hideConfirmDeleteHandler={hideConfirmDeleteHandler}
        ></DeleteConfirmation>
      <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button
            variant="primary"
            type="button"
            onClick={() => navigate("/superbrand-create")}
          >
            Add Super Brand
          </Button>
        </Col>
      </Row>
      <Row md={3} className="g-4 mt-1">
      {superAllbrand.map((sv) => {
              return (
                <Col key={sv.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Super Brand Details</Card.Title>
                      <Card.Text>
                        <b>Product Name:</b> {sv.productName}
                      </Card.Text>
                      <Card.Text>
                        <b>Brand: </b>
                        {sv.brand}
                      </Card.Text>
                      <Card.Text>
                        <b>cost: </b>
                        {sv.cost}
                      </Card.Text>
                      <Card.Text>
                        <b>type: </b>
                        {sv.type}
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => navigate(`/superbrand-update/${sv.id}`)}
                        >
                        Edit
                        </Button>
                        <Button
                         type="button"
                         variant="danger"
                         onClick={() => showConfirmDeleteHandler(sv.id)}
                         >
                    Delete
                  </Button>
                        
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
      </Row>
    </>
</>
      );
    }
  export default AllBrand;