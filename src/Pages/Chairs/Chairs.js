import React from "react";
import "./chairs.css";
import AddChairForm from "../../component/AddChairForm/AddChairForm";
import ChairsList from "../../component/ChairsList/ChairsList";

function Chairs({ chairsData, userData }) {
  return (
    <div className="chairs">
      <AddChairForm chairsData={chairsData} />
      <div className="chairs_title">Список Стільців</div>
      <ChairsList chairsData={chairsData} userData={userData} />
    </div>
  );
}

export default Chairs;
