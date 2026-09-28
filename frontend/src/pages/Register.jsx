import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../services/authService";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await register(form);
      alert("Registrasi berhasil! Silakan login.");
      navigate("/login", { replace: true });
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Registrasi gagal. Periksa kembali data Anda.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-base-200 p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-md">
        <div className="card-body">
          <h1 className="card-title justify-center text-2xl">Register</h1>

          {error && (
            <div className="alert alert-error mt-4">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <label className="form-control w-full">
              <span className="label-text">Nama</span>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Nama Lengkap"
                required
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="johndoe@example.com"
                required
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text">Password</span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="input input-bordered w-full mb-3"
                placeholder="Password"
                required
              />
            </label>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? "Memproses..." : "Daftar"}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm">
              Sudah punya akun?{" "}
              <Link to="/login" className="text-primary underline">
                Login di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
