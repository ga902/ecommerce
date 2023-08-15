import { createContext,useState } from "react";

const AuthContext = createContext();

const AuthProvider =({children})=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    const[email, setEmail] =useState('');
    const[password,setPassword] =useState('');
    return(
        <AuthContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            email, setEmail,
            password,setPassword,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
export {AuthContext,AuthProvider};