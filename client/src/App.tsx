import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./routes/Map";
import Dojo from "./routes/Dojo";
import Profile from "./routes/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Navbar />
        <div className="flex-1 mb-16 md:mb-0 bg-neutral-800">
          <Routes>
            <Route path="/" element={<Map />} />
            <Route path="/dojo" element={<Dojo />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;