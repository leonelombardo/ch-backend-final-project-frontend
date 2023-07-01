import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalContext } from "./context/GlobalContext";

import { Home } from "./views/Home";
import { Checkout } from "./views/Checkout";
import { Error404 } from "./views/Error404";
import { AdminLogin } from "./views/AdminLogin";
import { AdminEditUser } from "./views/AdminEditUser";
import { AdminError404 } from "./views/AdminError404";

export const App = () => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  const context = {
    token,
    setToken
  }

  return (
    <GlobalContext.Provider value={context}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout/:cartId" element={<Checkout/>}/>
          <Route path="/*" element={<Error404/>}/>
          <Route path="/admin" element={<AdminLogin/>}/>
          <Route path="/admin/edit/user" element={<AdminEditUser/>}/>
          <Route path="/admin/*" element={<AdminError404/>}/>
        </Routes>
      </Router>
    </GlobalContext.Provider>
  )
}