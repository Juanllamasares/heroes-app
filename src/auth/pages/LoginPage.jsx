import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const navigate = useNavigate();
  const { login } = useContext( AuthContext )

  const onLogin = () => {

    login('Juan');
   
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container text-center">
      <h1>LoginPage</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
