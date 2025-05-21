import mapIcon from "../assets/map.png";
import dojoIcon from "../assets/dojo.png";
import profileIcon from "../assets/profile.png";
import logo from "../assets/manabuu_text.png";
import logoManabuu from "../assets/manabuu.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Settings } from "lucide-react"; // ou remplace par une icône PNG

const links = [
  { to: "/", label: "Map", icon: mapIcon },
  { to: "/dojo", label: "Dojo", icon: dojoIcon },
  { to: "/profile", label: "Profil", icon: profileIcon },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* 🖥️ Desktop sidebar */}
      <div className="hidden md:flex flex-col items-center bg-white border-r w-1/6 h-screen fixed top-0 left-0 z-50 px-4 py-6 space-y-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Manabuu"
          className="w-36 mb-8 object-contain"
        />

        {links.map((link) => {
          const active = location.pathname === link.to;
          return (
            <button
              key={link.to}
              onClick={() => navigate(link.to)}
              className={`p-3 rounded-xl transition-all ${
                active ? "bg-green-100" : "hover:bg-gray-100"
              }`}
            >
              <img src={link.icon} alt={link.label} className="w-7 h-7" />
            </button>
          );
        })}

        {/* Settings at bottom */}
        <div className="mt-auto mb-2">
          <button
            onClick={() => navigate("/settings")}
            className="p-3 hover:bg-gray-100 rounded-xl"
          >
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* 📱 Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-neutral-700 flex justify-between items-center h-14 px-4 z-50">
        <img src={logoManabuu} alt="Manabuu" className="h-8 object-contain" />
        <button
          onClick={() => navigate("/settings")}
          className="p-2"
        >
          <Settings className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* 📱 Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-neutral-700 flex justify-around items-center h-16 z-50">
        {links.map((link) => {
          const active = location.pathname === link.to;
          return (
            <button
              key={link.to}
              onClick={() => navigate(link.to)}
              className={`p-2 transition-all ${
                active ? "text-green-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <img src={link.icon} alt={link.label} className="w-10" />
            </button>
          );
        })}
      </div>
    </>
  );
}
