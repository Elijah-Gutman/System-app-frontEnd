import axios from "axios";
import { useState } from "react";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";

export function AuthenticationPage() {
  const handleShow = () => {
    console.log("handleShow");
  };
  // useEffect(handleIndex, []);
  return (
    <div>
      <SignupPage />
      <LoginPage />
    </div>
  );
}
