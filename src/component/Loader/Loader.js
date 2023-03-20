import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./loader.css";

function Loader() {
  return (
    <div className="loader">
      <Box>
        <CircularProgress />
      </Box>
    </div>
  );
}

export default Loader;
