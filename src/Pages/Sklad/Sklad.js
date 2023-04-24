import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./sklad.css";

function Sklad() {
  return (
    <div className="sklad">
      <div className="side_bar">
        <Link to="monitors">Монітори</Link>
        <Link to="chairs">Стільці</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Sklad;
