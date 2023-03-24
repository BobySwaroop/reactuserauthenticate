
import './App.css';
import './components/Navbar.css';
import React, {useEffect, useState }from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { auth } from  "./components/Firebase";
function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName);
      }
      else{
        setUserName("");
      }
      
    });
  },[]);
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/nav' element ={<Navbar />} />
          <Route path='/' element ={<Home name={userName} />} />
          <Route path='/login' element ={<Login />} />
          <Route path='/signup' element ={<Signup />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
