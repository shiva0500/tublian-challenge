import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./pages/services/Service";
import CheckBoxCard from "./components/checkboxs/CheckBoxCard";


const App = () => {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/service" element={<Service />} />
          <Route path="/checkbox" element={<CheckBoxCard />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
