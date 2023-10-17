import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './styles/App.css';
import Dashboard from "./components/Dashboard";
import InvoiceInfo from "./components/InvoiceInfo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App h-screen">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invoice/*" element={<InvoiceInfo />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
