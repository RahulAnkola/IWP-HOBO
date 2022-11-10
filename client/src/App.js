import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import LondonMap from "./pages/map/LondonMap";
import BerlinMap from "./pages/map/BerlinMap";
import MadridMap from "./pages/map/MadridMap";
import Payment from "./pages/payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/londonmap" element={<LondonMap />} />
        <Route path="/berlinmap" element={<BerlinMap />} />
        <Route path="/madridmap" element={<MadridMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
