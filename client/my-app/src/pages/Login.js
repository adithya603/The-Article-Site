import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";


const LoginPage = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  console.log(inputs)
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)   //calling login function from AuthContext
      navigate("/home");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="auth">
      <h1 className="authTitle">Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button className="authButton" onClick={handleSubmit}>Login</button>
        {err && <p>No account found!</p>}
        <span>
          Don't have an account? <Link className="signup" to="/signup">Sign up</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginPage;