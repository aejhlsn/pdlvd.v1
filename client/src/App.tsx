//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Authenticate } from "./pages/auth";
import { ProfilePage } from "./pages/profile-page";
import { Register } from "./pages/register";

export const App = () => {
 // const [count, setCount] = useState(0)
  return(
    <Router>
      <Routes>
        <Route path="/auth" element={ <Authenticate/> }/>
        <Route path="/profile-page" element={ <ProfilePage/> }/>
        <Route path="/register" element={ <Register/> } />
      </Routes>
    </Router>
  );
}

export default App;

