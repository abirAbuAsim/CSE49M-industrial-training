import React from "react";

const ItemRow = (props) => {
  const removeItem = () => {};

  return (
    <li className="flex justify-between items-center border-b py-2">
      {`${props.itemName}: ${props.amount}`}
      <button
        className="bg-red-500 text-white p-1 rounded"
        onClick={removeItem}
      >
        REMOVE ITEM
      </button>
    </li>
  );
};

export default ItemRow;
