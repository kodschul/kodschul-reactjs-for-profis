import React, { useState } from "react";

import LoginPageView from "./LoginPage.view";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    if (username == "admin" && password == "pass") {
      // api call check

      // load user data

      //
      alert("Welcome back");
    } else {
      alert("wrong password or username");
    }
  };

  return (
    <LoginPageView
      username={username}
      password={password}
      signIn={signIn}
      setPassword={setPassword}
      setUsername={setUsername}
    />
  );
};

export default LoginPage;
