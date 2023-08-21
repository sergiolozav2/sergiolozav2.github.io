import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
