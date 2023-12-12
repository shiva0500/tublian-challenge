import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./pages/services/Service";
import CheckBoxCard from "./components/checkboxs/CheckBoxCard";
import PaymentSuccess from "./pages/paymentsuccess/paymentsuccess";
import PaymentPlan from "./pages/paymentplan/PaymentPlan";


const App = () => {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/service" element={<Service />} />
          <Route path="/checkbox" element={<CheckBoxCard />} />
          <Route path="/paysuc" element={<PaymentSuccess />} />
          <Route path="/payplan" element={<PaymentPlan />} />


        </Routes>
      </Router>
    </>
  );
};

export default App;
