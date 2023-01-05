import React from "react";
import { Route, Routes } from "react-router";
import { Investment, Navigation } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Investment />} />
      </Route>
    </Routes>
  );
}

export default App;