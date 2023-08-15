import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const SignUp=()=>{
    const { 
            isLoggedIn, 
            setIsLoggedIn,
            email, 
            setEmail ,
            password,
            setPassword
        } = useContext(AuthContext);
    const handleSignUp=(e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        console.log("Function Get Called"+email+isLoggedIn);
    }    
    return(
        <div>
            <form onSubmit={handleSignUp}>
                  <input 
                    type="email"
                    name="email" value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email"
                    />
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    />
                    <button type="submit">SignUp</button>
                    <p>{isLoggedIn}</p>
            </form>
        </div>
    )
}
export default SignUp;