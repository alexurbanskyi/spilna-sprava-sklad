import React from "react";
import ChairItem from "../ChairItem/ChairItem";
import "./chairsList.css";

function ChairsList({ chairsData, userData}) {

  return (
    <div>
      {
       chairsData.map((item) =>  <ChairItem chairData={item} userData={userData}/>)
      } 
    </div>
  );
}

export default ChairsList;
