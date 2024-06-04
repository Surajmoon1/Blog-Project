import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authServices from "../../appwriteServices/authService";

function LogoutBtn() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authServices.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      onClick={handleLogout}
      className="inline-block px-6 py-2 duration-200 ease-in-out hover:bg-blue-100 rounded-full"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;