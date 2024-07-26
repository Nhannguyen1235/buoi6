import React, { useContext, useEffect } from "react";
import { Button, Container, Table } from "reactstrap";
import Header from "../header/Header";
import { AppContext } from "../../AppContext";

export default function Card() {
  const { card,setCard,deleteCard } = useContext(AppContext);
  useEffect(() => {
    const storedCard = JSON.parse(localStorage.getItem("cart")) || [];
    setCard(storedCard);
  }, [setCard]);
  const handleDelete = (id) => {
    deleteCard(id);
  }
  return (
    <div>
      <Header />
      <Container>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {card.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><Button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Container>
    </div>
  );
}
