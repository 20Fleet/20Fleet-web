import React from "react";
import { Route, Routes } from "react-router";
import { Dashboard, Investment, Login, Navigation, Register } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Investment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
