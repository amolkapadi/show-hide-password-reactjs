
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-header">
          <div className="logo">A</div>
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in.</p>
        </div>

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        <button type="button" className="login-button">
          Sign In
        </button>

        <div className="login-footer">
          <p>Secure Login · Welcome to your account</p>
        </div>

      </div>
    </div>
  );
}

export default App;
