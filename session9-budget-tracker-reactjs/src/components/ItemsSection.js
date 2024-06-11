import React from "react";
import ItemRow from "./ItemRow";

const ItemsSection = (props) => {
  return (
    <div className="bg-white p-5 rounded shadow-md m-2">
      <h2 className="text-2xl font-semibold m-2 text-center">Items</h2>
      <ul id="budgetList" className="list-none p-0">
        {
            props?.items?.map((item, index) => (
                <ItemRow itemName={props.itemName} amount={props.amount}/>
            ))
        }
      </ul>
    </div>
  );
};

export default ItemsSection;
