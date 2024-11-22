import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./Auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className={`auth-flip-card ${isLogin ? "" : "rotate"}`}>
        {isLogin ? <Login onToggle={toggleView} /> : <Signup onToggle={toggleView} />}
      </div>
    </div>
  );
}

export default Auth;
