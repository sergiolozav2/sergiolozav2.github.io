import { Header } from "./Components/Header";
import { StarsWrapper } from "./Components/StarsWrapper";
import "./Home.css";
import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <div className="radial-background">
      <Header />
      <Outlet />
 
      <StarsWrapper />
    </div>
  );
}
