import React, { useState } from "react";
import { Form } from "react-bootstrap";
import LoaderButton from "./LoaderButton"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link, useNavigate} from "react-router-dom";

export default function SignUp() {

  const [isLoading, setIsLoading] = useState(false);
  const [userReg, setUserReg] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const type = e.target.id;
    const value = e.target.value;
    setUserReg({ ...userReg, [type]: value });
  };

  // function validateForm() {
  //   return (
  //     userReg.name > 0 &&
  //     userReg.email.length > 0 &&
  //     userReg.password.length > 0 &&
  //     userReg.password === userReg.confirmPassword
  //   );
  // }

  let result;
  async function signUp(e) {
    e.preventDefault();
    // if (!validateForm()){
    //   console.log("please check the form details")
    //   return
    // }
    setIsLoading(true);
    const newRecord = { ...userReg };
    // console.log(newRecord);
    result = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      "Content-Type": "application/json",
      "Accept": "application/json",
      body: JSON.stringify(newRecord),
    });
    result = await result.json();
    // console.log(result);
    setIsLoading(false);
    diffToast()
    setTimeout(() => {
      navigate("/login");
    }, 3000);
    setUserReg({ name: "", email: "", password: "", cpassword: "" });
  }

   const diffToast = () => {
    //  e.preventDefault();
     var status = result.Data.status;
    //  console.log(status);
     return status===201
       ? toast.success("Registration Successfull!", {
           position: "top-center",
         })
       : toast.error("Registration UnSuccessfull!", {
           position: "top-center",
         });
   };

  return (
    <div>
      <Form className="container my-5" onSubmit={signUp}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={userReg.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userReg.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={userReg.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repeat your Password"
            value={userReg.cpassword}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree all statements in Terms of service"
          />
        </Form.Group>
        <LoaderButton
          block="true"
          size="lg"
          type="submit"
          variant="success"
          isLoading={isLoading}
        >
          Signup
        </LoaderButton>
        <ToastContainer />
      </Form>
      <div>
        Already have an account go to login page! <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
