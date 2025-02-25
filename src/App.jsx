import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Budget from "./pages/Budget";
import Transaction from "./pages/Transaction";
import Category from "./pages/Category";
import Subcategory from "./pages/Subcategory";
import PaymentMethod from "./pages/PaymentMethod";
import Report from "./pages/Report";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-full font-raleway">
      <Router>
        {/* Navbar */}
        <Navbar />

        <div className="flex flex-grow">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-grow py-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/category" element={<Category />} />
              <Route path="/subcategory" element={<Subcategory />} />
              <Route path="/paymentmethod" element={<PaymentMethod />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
