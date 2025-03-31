import { useState, useEffect, useCallback } from "react";

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (token) {
      const { exp, role } = JSON.parse(atob(token.split(".")[1]));
      if (Date.now() >= exp * 1000) {
        logout();
      } else {
        setIsAdmin(role === "admin");
      }
    }
  }, [token]);

  const login = useCallback((newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAdmin(false);
  }, []);

  return { token, isAdmin, login, logout };
};

export default function AuthApp() {
  const { token, isAdmin, login, logout } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });

  if (!token) {
    return (
      <div className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow-lg w-80">
        <input className="w-full p-2 mb-2 border rounded-md" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input className="w-full p-2 mb-2 border rounded-md" placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => login("dummy.jwt.token")}>Login</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow-lg w-80">
      <h2 className="text-lg font-bold">Welcome {isAdmin ? "Admin" : "User"}</h2>
      {isAdmin ? <p>Admin Dashboard</p> : <p>User Dashboard</p>}
      <button className="bg-red-500 text-white p-2 rounded-md mt-4" onClick={logout}>Logout</button>
    </div>
  );
}
