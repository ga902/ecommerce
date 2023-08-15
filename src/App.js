import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { AuthProvider } from './context/AuthContext';
import myContext from './MyContext';
function App() {
    const[text,setText]= useState('')
    return (
      <myContext.Provider value={{text,setText}}>
          <Header/>
      </myContext.Provider>
        
     );
}
export default App;
