import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AuthErrorAlert } from './auth/components/AuthErrorAlert'
import "./styles.css";
import "animate.css";

export const HeroesApp = () => {
  return (
    <div className="heroPage-container">
      <AppRouter />
      <AuthErrorAlert />
    </div>
  );
};
