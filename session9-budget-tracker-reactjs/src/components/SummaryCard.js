import React from "react";

const SummaryCard = (props) => {
  return (
    <div className="bg-white p-5 rounded shadow-md w-1/3 m-1">
      <h2 className={`text-2xl font-bold m-2 ${props.textColor}`}>{props.title}</h2>
      <p className={`text-3xl font-bold m-2 ${props.textColor}`}>${props.amount}</p>
    </div>
  );
};

export default SummaryCard;
