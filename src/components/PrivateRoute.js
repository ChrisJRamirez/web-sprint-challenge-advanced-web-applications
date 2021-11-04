import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({component: Component, ...rest}) {
  return (
  
  <Route
  {...rest}
  redner = {(componentProps) => {
    if(localStorage.getItem("token")){
      return <Component {...componentProps} />
    }
    else {
      return <Redirect to="/login" />
    }
  }}
  
  
  />);
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute