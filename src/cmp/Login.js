import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, Link, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // const [records, setRecords] = useState([]);

  const handleInputChange = (e) => {
    const type = e.target.type;
    const value = e.target.value;

    setUserLogin({ ...userLogin, [type]: value });
  };

  let token;
  async function login(e) {
    e.preventDefault();
    const newRecord = { ...userLogin };
    //  console.log(newRecord);
    let result = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newRecord),
    });
    result = await result.json();
    // console.log(result)
    localStorage.setItem("token", JSON.stringify(result.Data.token));
    // var token = JSON.parse(localStorage.getItem("token"));
    // console.log(token);
    diffToast();
    setTimeout(() => {
      navigate("/home");
    }, 3000);
    
    setUserLogin({ email: "", password: "" });
  }
  const diffToast = () => {
    let tokst = localStorage.getItem("token");
    if (tokst !== "undefined") {
      token = JSON.parse(localStorage.getItem("token"));
    }
    // console.log(token)
    return token
      ? toast.success("Login Successfull!", {
          position: "top-center",
        })
      : toast.error("Login UnSuccessfull!", {
          position: "top-center",
        });
  };

  return (
    <div>
      {!token ? (
        <div>
          <Form className="container my-5" onSubmit={login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={userLogin.email}
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={userLogin.password}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
            <ToastContainer />
          </Form>
          <div>
            Need an account? <Link to="/signup">SignUp</Link>
          </div>
        </div>
      ) : (
        <Navigate to="/product"></Navigate>
      )}
    </div>
  );
}
