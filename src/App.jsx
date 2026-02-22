import { useState, useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  const [userData] = useContext(AuthContext);

  // Restore session on refresh
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserId(userData.id);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password,
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserId(employee.id);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", id: employee.id }),
        );
      }
    } 
    else {
      alert("Invalid Credentials");
    }
  };

  const loggedInUserData = userData?.find((emp) => emp.id === loggedInUserId);

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashboard changeUser={setUser} />}

      {user === "employee" && loggedInUserData && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
