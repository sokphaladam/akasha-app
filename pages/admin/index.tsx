import { NextPage } from "next";
import React from "react";
import { LoginScreen } from "../../src/screens/LoginScreen";
import { auth } from "../../src/store/firebase";

const { currentUser } = auth;

const Admin: NextPage = () => {
  if (currentUser) {
    return <div>Login</div>;
  }

  return <LoginScreen />;
};

export default Admin;
