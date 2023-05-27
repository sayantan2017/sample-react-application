import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
function AddSuperBrand() {
  const ProductName = useRef("");
  const Brand = useRef("");
  const PTypes = useRef("");
  const cost = useRef("");
 
  const navigate = useNavigate();
 
  function addSuperBrandHandler() {
    var payload = {
        ProductName: ProductName.current.value,
        Brand: Brand.current.value,
        PTypes: PTypes.current.value,
        cost: cost.current.value,
    };
    axios
      .post("https://localhost:5001/api/Gadgets/add", payload)
      .then((response) => {
        navigate("/");
      });
  }
 
  return (
    <>
      <legend>Add A New Super Brand</legend>
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
          <Form.Control type="text" ref={PTypes} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formcost">
          <Form.Label>Cost</Form.Label>
          <Form.Control type="text" ref={cost} />
        </Form.Group>
      </form>
      <Button variant="primary" type="button" onClick={addSuperBrandHandler}>
        Submit
      </Button>
    </>
  );
}
export default AddSuperBrand;