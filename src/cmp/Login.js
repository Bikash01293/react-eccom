import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  // const [records, setRecords] = useState([]);

  const handleInputChange = (e) => {
    const type = e.target.type;
    const value = e.target.value;

    setUserLogin({ ...userLogin, [type]: value });
  };


   async function login(e){
     e.preventDefault();
     const newRecord = { ...userLogin };
     console.log(newRecord);
      let result = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newRecord),
      });
      result = await result.json();
      console.log(result)
      setUserLogin({ email: "", password: "" });
   }

   


  return (
    <div>
      <Form className="container my-5" >
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
        <Button variant="success" type="submit" onClick={login}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
