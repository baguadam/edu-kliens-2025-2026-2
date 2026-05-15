import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { logout, selectToken } from "../auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <NavLink
          to="/students"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-4 font-semibold"
              : "hover:underline"
          }
        >
          Diákok
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-4 font-semibold"
              : "hover:underline"
          }
        >
          Új diák hozzáadása
        </NavLink>
        {!token && (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-4 font-semibold"
                : "hover:underline"
            }
          >
            Bejelentkezés
          </NavLink>
        )}
      </div>
      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
      >
        Kijelentkezés
      </button>
    </nav>
  );
}
