import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <Navbar />
      <div
        className="App"
        class="container p-2 lg:px-8 max-w-screen-2xl mx-auto"
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
