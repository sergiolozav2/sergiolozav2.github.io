import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Welcome } from "../Pages/Welcome/Welcome";
import { Projects } from "../Pages/Projects/Projects";
import { ROUTE_HOME, ROUTE_PROJECTS, ROUTE_ROULETTE } from "./ConstantRoutes";
import { Roulette } from "../Pages/Roulette/Roulette";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTE_ROULETTE} element={<Roulette />} />
      <Route path={ROUTE_HOME} element={<Home />}>
        <Route path={ROUTE_HOME} element={<Welcome />} />
        <Route path={ROUTE_PROJECTS} element={<Projects />} />
      </Route>
    </Routes>
  );
}
