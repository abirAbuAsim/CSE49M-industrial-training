import React, { useState } from "react";

const AddNewItemCard = (props) => {
  const [type, setType] = useState("income");
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState(0);

  const addItem = () => {

  };

  return (
    <div className="bg-white p-5 rounded shadow-md w-1/3 m-1">
      <h2 className="text-2xl font-bold m-2 text-green-500">Add New Item</h2>
      <div div className="flex mb-3">
        <select 
            name="type" id="type" className="p-2 border rounded w-1.5/4 m-1"
            value={type}
            onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
        </select>
        <input
          type="text"
          id="item"
          placeholder="Item"
          className="p-2 border rounded w-1/4  m-1"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          id="amount"
          placeholder="Amount"
          className="p-2 border rounded w-1/4  m-1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          id="addButton"
          className="bg-blue-500 text-white p-2 rounded w-1/4  m-1"
          onClick={addItem}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewItemCard;
