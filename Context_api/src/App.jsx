import { useState } from "react";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import "./App.css";
import UserContext from "./Context/UserContext.js";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1> React for Context Api</h1>
      <Login />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
