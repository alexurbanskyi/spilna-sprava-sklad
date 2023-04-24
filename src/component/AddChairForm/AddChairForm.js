import React, { useState } from "react";
import { useAddChairsMutation } from "../../redux/chairApi";
import { toast } from "react-toastify";
import "./addChairForm.css";

function AddChairForm({ chairsData }) {
  const [chairNo, setChairNo] = useState("");
  const [addChairs] = useAddChairsMutation();

  const isChairAdded = chairsData.filter(
    (item) => Number(chairNo) === Number(item.chairNo)
  );

  async function addChairHandler() {
    if (isChairAdded.length) {
      toast.error("Стілець з таким номером вже існує!");
      return;
    }

    if (!chairNo) {
      return;
    }

    await addChairs({ chairNo: chairNo, master: null });
    toast.success("Стілець успішно додано до списку!");
    setChairNo("");
  }

  return (
    <div className="chair_form">
      <div>
        <label>Стілець No: </label>
        <input
          className="chair_form_input"
          placeholder="No..."
          value={chairNo}
          type="number"
          onChange={(event) => setChairNo(event.target.value)}
        />
      </div>
      <button
        className={
          !chairNo
            ? "chair_form_btn"
            : ["chair_form_btn", "activ_btn"].join(" ")
        }
        onClick={addChairHandler}
      >
        Додати стілець до списку
      </button>
    </div>
  );
}

export default AddChairForm;
