import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
export default function Product() {
  // console.log("this is the token", token);
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  // console.log("this is the header", config);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let tokst = localStorage.getItem("token");
    if (tokst !== "undefined") {
      var token = JSON.parse(localStorage.getItem("token"));
    }
    const getData = () => {
      // console.log("Loaded product", token);
      axios
        .get(`http://localhost:3001/product/all`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if(((response.data.data).length) === 0){
            return 

          } else {
            setProduct(response.data.data);
          }
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return (
    <div style={{ backgroundColor: "lighTgreen" }}>
      {product.length === 0 ? (
        <div> nothing to display</div>
      ) : (
        <div className="row">
          {product.map((prod) => (
            <Card
              key={prod.id}
              style={{
                width: "18rem",
                marginLeft: "150px",
                marginTop: "50px",
                backgroundColor: "lighTgreen",
                border: "none",
              }}
            >
              <Card.Img
                variant="top"
                src={prod.image}
                className="rounded mb-0"
                alt="100x100"
              />
              <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Collapse in={open}>
                  <Card.Text>{prod.description}</Card.Text>
                </Collapse>
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className="mr-2"
                >
                  See decription...
                </Button>
                <Button variant="success">Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
