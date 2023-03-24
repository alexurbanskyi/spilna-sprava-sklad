import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./sklad.css";

function Sklad() {
  return (
    <div className="sklad">
      <div className="side_bar">
        <Link to="desktop">Cистемний блок</Link>
        <Link to="monitors">Монітор</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Sklad;
