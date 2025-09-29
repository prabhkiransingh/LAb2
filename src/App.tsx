import { BrowserRouter as Router, Routes, Route } from "react-router";
import Nav from "./components/Nav";
import Header from "./components/Header";
import { EmployeeList } from "./components/EmployeeDirectory";
import Organization from "./components/Organization";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <Routes>
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="*" element={<EmployeeList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
