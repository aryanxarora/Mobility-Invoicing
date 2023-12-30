import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useState } from "react";

import './styles/App.css';

import InvoiceTab from "./components/InvoiceTab";
import InvoiceInfo from "./components/InvoiceInfo";
import Navbar from "./components/Navbar";
import Authenticator from "./components/Authenticator";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";


function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['auth', 'name', 'user', 'invoices']);
  //setCookie('auth', false, { path: '/' });
  const [user, setUser] = useState({});
  const [invoices, setInvoices] = useState([]);

  const handleAuthSuccess = (data) => {
      setCookie('auth', true, { path: '/' });
      setCookie('name', data.user.firstName + " " + data.user.lastName, { path: '/' });
      setCookie('user', data.user, { path: '/' });
      setCookie('invoices', data.invoice, { path: '/' });
      setCookie('address', data.address, { path: '/' });
      console.log(data);
  };

  const handleLogout = () => {
      setCookie('auth', false, { path: '/' });
      window.location.href = '/';
  };

  return (
    <div className="App h-screen">
      <Navbar cookies={cookies} onLogout={handleLogout} />
      <Router>
        <Routes>
          { cookies.auth ? 
            (<Route path="/" element={<Dashboard cookies={cookies} />} /> ) :
            (<Route path="/" element={<Authenticator onAuthSuccess={handleAuthSuccess} />} /> )
          }
          { cookies.auth ? 
            (<Route path="/invoice" element={<InvoiceTab cookies={cookies} />} /> ) :
            (<Route path="/" element={<Authenticator onAuthSuccess={handleAuthSuccess} />} /> )
          }
          { cookies.auth ? 
            (<Route path="/invoice/*" element={<InvoiceInfo cookies={cookies} />} /> ) :
            (<Route path="/" element={<Authenticator onAuthSuccess={handleAuthSuccess} />} /> )
          }
          { cookies.auth ? 
            (<Route path="/register" element={<Dashboard />} /> ) :
            (<Route path="/register" element={<Register />} /> )
          }
        </Routes>
      </Router>      
    </div>
  );
}

export default App;