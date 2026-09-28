import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Jika token tidak ada (belum login), redirect ke halaman /login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Jika sudah login, tampilkan Navbar dan konten halaman yang dituju (children)
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default ProtectedRoute;
