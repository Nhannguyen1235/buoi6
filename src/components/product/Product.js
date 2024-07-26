import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Col,
  CardTitle,
} from "reactstrap";
import { AppContext } from "../../AppContext";

export default function Product(props) {
  const { addCard } = useContext(AppContext);
  const handleAdd = (id) => {
    addCard(id);
    Swal.fire({
        title: "Add cart succesful!",
        text: "-_-!",
        icon: "success"
      });
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(props.product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const { product } = props;
  return (
    <Col lg={3} md={4} sm={6} xs={6} className="">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            <h1>product</h1>
            <p>Info: {product.name}</p>
            <Link to={`/detail/${product.id}`}>Chi tiết sản phẩm</Link>
          </CardText>
          <Button onClick={() => handleAdd(product.id)}>Add cart</Button>
        </CardBody>
      </Card>
    </Col>
  );
}