import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import { useState } from "react";

function App() {

  const [currentUser, setCurrentUser] = useState("Guest");

  return (
    <>
      <Header displayName={currentUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
