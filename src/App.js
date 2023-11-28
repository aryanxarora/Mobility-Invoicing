import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useState } from "react";

import './styles/App.css';

import InvoiceTab from "./components/InvoiceTab";
import InvoiceInfo from "./components/InvoiceInfo";
import Navbar from "./components/Navbar";
import Authenticator from "./components/Authenticator";
import Dashboard from "./components/Dashboard";


function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['auth', 'name']);
  // setCookie('auth', false, { path: '/' });
  const [user, setUser] = useState({});

  const handleAuthSuccess = (user) => {
      setCookie('auth', true, { path: '/' });
      setCookie('name', 'Aryan Arora', { path: '/' });
      console.log("IN HANDLE", cookies);
  };

  const handleLogout = () => {
      setCookie('auth', false, { path: '/' });
  };

  return (
    <div className="App h-screen">
      <Navbar cookies={cookies} onLogout={handleLogout} />
      <Router>
        <Routes>
          { console.log("BEFORE RENDER", cookies) }
          { cookies.auth ? 
            (<Route path="/" element={<Dashboard />} /> ) :
            (<Route path="/" element={<Authenticator onAuthSuccess={handleAuthSuccess} />} /> )
          }
          <Route path="/invoice" element={<InvoiceTab />} />
          <Route path="/invoice/*" element={<InvoiceInfo />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;