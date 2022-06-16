import React, { useEffect, useState } from "react";
import axios from "axios";

import { Carousel } from "react-bootstrap";
export default function Home() {

  const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true)
    let tokst = localStorage.getItem("token");
    if (tokst !== "undefined") {
      var token = JSON.parse(localStorage.getItem("token"));
    }
    const getData = () => {
      axios
        .get(`http://localhost:3001/product/all`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data.data.length === 0) {
            return;
          } else {
            setProduct(response.data.data);
            // setLoading(false)
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
        <div className="">
          {/* <Carousel style={{ color: "black" }}>
            {product.map((prod) => (
              <Carousel.Item interval={1000}>
                <img
                  width={1100}
                  height={700}
                  src={prod.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{prod.name}</h3>
                  <p>{prod.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel> */}
          <Carousel variant="dark">
            {product.map((prod) => (
              <Carousel.Item interval={2500}>
                <img
                  width={1100}
                  height={700}
                  className="m-4 rounded"
                  src={prod.image}
                  alt="First slide"
                />

                <Carousel.Caption className="">
                  <h5>{prod.name}</h5>
                  <p>{prod.description}</p>
                </Carousel.Caption>
              
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}
