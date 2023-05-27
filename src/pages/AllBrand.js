import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
function AllBrand() {
    const navigate = useNavigate();
    const [superAllbrand, setsuperAllbrand] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:5001/api/Gadgets/All").then((response) => {
            setsuperAllbrand((data) => {
            return response.data;
            console.log(response.data);
          });
        });
      }, []);
      return (
        <>
         <>
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