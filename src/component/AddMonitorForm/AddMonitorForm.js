import React, { useState } from "react";
import { useAddMonitorMutation } from "../../redux/devicesApi";
import "./monitorForm.css";

export default function AddMonitorForm() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedDiagonal, setSelectedDiagonal] = useState("");
  const [monitorNo, setMonitorNo] = useState("");

  const [addMonitor] = useAddMonitorMutation();

  const isValid =
    Boolean(selectedBrand) && Boolean(selectedDiagonal) && Boolean(monitorNo);
  console.log("isvalid -->", isValid);

  async function addHandler() {
    const data = {
      monitorNo: monitorNo,
      brand: selectedBrand,
      diagonal: selectedDiagonal,
      master: null,
    };
    await addMonitor(data);
    setSelectedBrand("");
    setMonitorNo("");
    setSelectedDiagonal("");
    console.log("monitor data", data);
  }

  function handleBrandChange(event) {
    setSelectedBrand(event.target.value);
  }

  function handleDiagonalChange(event) {
    setSelectedDiagonal(event.target.value);
  }

  function handleMonitorNoChange(event) {
    setMonitorNo(event.target.value);
  }

  return (
    <div className="monitorForm">
      <div className="monitorForm_input_holder">
        <div>
          <label>Монітор No: </label>
          <input
            className="monitorForm_input"
            placeholder="No..."
            value={monitorNo}
            onChange={(event) => handleMonitorNoChange(event)}
          />
        </div>
        <div>
          <label>Бренд: </label>
          <select
            className="monitorForm_input"
            value={selectedBrand}
            onChange={(event) => handleBrandChange(event)}
          >
            <option value="" disabled>
              оберіть бренд
            </option>
            <option value="LG">LG</option>
            <option value="SONY">SONY</option>
            <option value="SAMSUNG">SAMSUNG</option>
          </select>
        </div>
        <div>
          <label>Диагональ: </label>
          <select
            className="monitorForm_input"
            value={selectedDiagonal}
            onChange={(event) => handleDiagonalChange(event)}
          >
            <option value="" disabled>
              оберіть диагональ
            </option>
            <option value="19">19</option>
            <option value="21">21</option>
            <option value="22">22</option>
          </select>
        </div>
      </div>
      <button
        className={
          !isValid
            ? "monitorForm_button"
            : ["monitorForm_button", "activ_btn"].join(" ")
        }
        onClick={addHandler}
      >
        Додати монітор до списку
      </button>
    </div>
  );
}
