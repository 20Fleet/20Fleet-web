import React from "react";
import { Route, Routes } from "react-router";
import { Investment, Login, Navigation } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Investment />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
