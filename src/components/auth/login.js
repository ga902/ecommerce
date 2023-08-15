import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const { isLoggedIn, setIsLoggedIn, email,setEmail, password ,setPassword} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email1 === 'test@gmail.com' && password1 === 'test@gmail.com') {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are already logged in.</p>
      ) : (
        <>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Password"
            />
            <button type="submit">Login</button>
          </form>
          <p>test: {email}</p>
        </>
      )}
    </div>
  );
};

export default Login;
