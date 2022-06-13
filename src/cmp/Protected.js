import { Navigate } from "react-router-dom";
function Protected(props) {
  const Cmp = props.cmp;
  let tokst = localStorage.getItem("token");
  if (tokst !== "undefined") {
    var token = JSON.parse(localStorage.getItem("token"));
  }
//   console.log(token)
  // if (auth === 204){
  //     return <div>{<Navigate to="/"></Navigate>}</div>
  // }
  return <div> {token ? <Cmp /> : <Navigate to="/login"></Navigate>} </div>;
  // return <div> <Cmp /> </div>
}

export default Protected;
