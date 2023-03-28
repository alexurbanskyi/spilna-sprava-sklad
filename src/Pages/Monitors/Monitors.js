import React, { useState } from "react";
import "./monitors.css";

function Monitors({ monitorsData }) {
  function AddMonitorForm() {
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedDiagonal, setSelectedDiagonal] = useState("");

    function handleBrandChange(event) {
      setSelectedBrand(event.target.value);
    }

    function handleDiagonalChange(event) {
      setSelectedDiagonal(event.target.value);
    }
    console.log("selectedBrand -->", selectedBrand);
    return (
      <div>
        <div>
          <label>Monitor ID: </label>
          <input placeholder="enter id.." />
        </div>
        <div>
          <label>Brand: </label>
          <select
            value={selectedBrand}
            onChange={(event) => handleBrandChange(event)}
          >
            <option value="" disabled>
              Оберіть бренд
            </option>
            <option value="LG">LG</option>
            <option value="SONY">SONY</option>
            <option value="SAMSUNG">SAMSUNG</option>
          </select>
        </div>
        <div>
          <label>Діагональ: </label>
          <select
            value={selectedDiagonal}
            onChange={(event) => handleDiagonalChange(event)}
          >
            <option value="" disabled>
              Оберіть Діагональ
            </option>
            <option value="19">19</option>
            <option value="21">21</option>
            <option value="22">22</option>
          </select>
        </div>
      </div>
    );
  }
  console.log("monitorsData -->", monitorsData);
  return (
    <div className="monitors">
      <div>Monitors</div>
      <div>
        {monitorsData.map((item) => (
          <div key={item.monitorId}>
            <h1>ID: {item.monitorId}</h1>
            <p>Модель: {item.brand}</p>
            <p>Діагональ: "{item.diagonal}</p>
            <p>
              Власник:{" "}
              {item.master ? <span>{item.master}</span> : <span>вільний</span>}
            </p>
          </div>
        ))}
      </div>
      <AddMonitorForm />
    </div>
  );
}

export default Monitors;
