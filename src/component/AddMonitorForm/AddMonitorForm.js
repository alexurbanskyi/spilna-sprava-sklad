import React, { useState } from "react";
import {
  useAddMonitorMutation,
  useGetMonitorsQuery,
} from "../../redux/devicesApi";
import { toast } from "react-toastify";
import "./monitorForm.css";

export default function AddMonitorForm() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedDiagonal, setSelectedDiagonal] = useState("");
  const [monitorNo, setMonitorNo] = useState("");

  const [addMonitor, { isError }] = useAddMonitorMutation();
  const { data: monitorsData = [], isLoading: isMonitorsLoading } =
    useGetMonitorsQuery();

  const isValid =
    Boolean(selectedBrand) && Boolean(selectedDiagonal) && Boolean(monitorNo);

  const isMonitorAdded = monitorsData.filter(
    (item) => Number(monitorNo) === Number(item.monitorNo)
  );

  async function addMonitorHandler() {
    const data = {
      monitorNo: monitorNo,
      brand: selectedBrand,
      diagonal: selectedDiagonal,
      master: null,
    };

    // monitor will not add to list if all filds don`t feel
    if (!isValid){return}
    
    // show error if enter monitor with this number already exists
    if (isMonitorAdded.length) {
      toast.error("Монітор з таким номером вже існує!");
      return;
    }

    await addMonitor(data);
    setSelectedBrand("");
    setMonitorNo("");
    setSelectedDiagonal("");
    toast.success("Монітор успішно додано!");
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
            type="number"
            onChange={(event) => setMonitorNo(event.target.value)}
          />
        </div>
        <div>
          <label>Бренд: </label>
          <select
            className="monitorForm_input"
            value={selectedBrand}
            onChange={(event) => setSelectedBrand(event.target.value)}
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
            onChange={(event) => setSelectedDiagonal(event.target.value)}
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
        onClick={addMonitorHandler}
      >
        Додати монітор до списку
      </button>
    </div>
  );
}
