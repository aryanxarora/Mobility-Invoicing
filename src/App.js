import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './styles/App.css';
import Navbar from './components/Navbar';
import Sample from "./components/Sample";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Sample />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
