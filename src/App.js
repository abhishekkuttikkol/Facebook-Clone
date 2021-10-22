import React from "react";
import "./App.css";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {user ? (
        <div>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
