import React from "react";
import { Navigate } from "react-router-dom";
export default function LogOut(props) {
    const Cmp = props.cmp
    let tokst = localStorage.getItem("token");
    if (tokst !== "undefined") {

        var token = JSON.parse(localStorage.getItem("token"));
    }
    localStorage.clear("token");
    // console.log(token)
  return <div>{token ? <Cmp /> : <Navigate to="/login"></Navigate>}</div>;
}
