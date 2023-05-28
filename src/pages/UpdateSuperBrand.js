import { useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axiosBaseURL from '../pages/enviroment';
import { useNavigate, useParams } from "react-router-dom";
 
function UpdateSuperBrand() {
    const ProductName = useRef("");
    const Brand = useRef("");
    const Type = useRef("");
    const cost = useRef("");
 
  const navigate = useNavigate();
 
  const { id } = useParams();
 
  useEffect(() => {
    axiosBaseURL.get(`/GetById/${id}`).then((response) => {
        console.log(response.data[0].type);
        ProductName.current.value = response.data[0].productName;
        Brand.current.value = response.data[0].brand;
        Type.current.value = response.data[0].type;
        cost.current.value = response.data[0].cost;
    });
  }, []);
 
  function updateVillainHandler() {
    var payload = {
        ProductName: ProductName.current.value,
        Brand: Brand.current.value,
        cost: cost.current.value,
        Type: Type.current.value,
        id: id,
    };
    axiosBaseURL
      .put(`/update/`, payload)
      .then((response) => {
        navigate("/");
      });
  }
 
  return (
    <>
       <legend>Update Super Brand</legend>
      <form>
        <Form.Group className="mb-3" controlId="formProductName">
          <Form.Label>Super Product Name</Form.Label>
          <Form.Control type="text" ref={ProductName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBrand">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" ref={Brand} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPTypes">
          <Form.Label>Product Type</Form.Label>
          <Form.Control type="text" ref={Type} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formcost">
          <Form.Label>Cost</Form.Label>
          <Form.Control type="text" ref={cost} />
        </Form.Group>
      </form>
      <Button variant="primary" type="button" onClick={updateVillainHandler}>
        Submit
      </Button>
    </>
  );
}
export default UpdateSuperBrand;