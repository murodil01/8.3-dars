import { Icons } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { Bell, LogOut, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setOpenAuthoritastionModalVisiblity } from "../../redux/modal-slice";
import type { AuthType } from "../../@types";
import Cookies from "js-cookie";
import { Badge } from "antd";
import { useReduxSelector } from "../../hooks/useRedux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState<Partial<AuthType>>({});
  const [menuOpen, setMenuOpen] = useState(false);
  const { data } = useReduxSelector((state) => state.shopSlice);

  useEffect(() => {
    if (Cookies.get("user")) {
      const data: AuthType = JSON.parse(Cookies.get("user") as string);
      setUser(data);
    }
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Blogs", to: "/blogs" },
  ];

  const handleLoginClick = () => {
    if (user.name) {
      navigate("/profile");
    } else {
      dispatch(setOpenAuthoritastionModalVisiblity());
    }
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="w-[90%] max-w-[1350px] mx-auto flex items-center justify-between gap-4 py-4 md:py-5">
        <Link to="/" aria-label="Go to homepage" className="flex-shrink-0">
          <Icons.Logo_Svg className="w-[150px] h-auto" />
        </Link>

        <nav className="hidden md:flex gap-8 items-center font-semibold text-gray-700">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="relative group cursor-pointer hover:text-green-700 transition"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            aria-label="Search"
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>

          <button
            aria-label="Notifications"
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <Bell className="w-5 h-5 text-gray-600" />
          </button>

          <Link
            to="/shop"
            aria-label="Go to shopping cart"
            className="relative"
          >
            <Badge
              count={data.length}
              size="small"
              offset={[0, 4]}
              showZero={false}
              className="cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-green-700 transition" />
            </Badge>
          </Link>

          <button
            onClick={handleLoginClick}
            className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded-md font-semibold select-none"
          >
            <LogOut className="w-5 h-5" />
            <span>{user.name ? user.name : "Login"}</span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <ul className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full py-2 text-gray-700 font-medium border-b border-gray-100 hover:text-green-600 transition"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  handleLoginClick();
                  setMenuOpen(false);
                }}
                className="w-full text-left text-green-700 font-semibold py-2 border-b border-gray-100 hover:bg-green-50 rounded transition"
              >
                {user.name ? `Profile (${user.name})` : "Login"}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
