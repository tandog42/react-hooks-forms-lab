import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItems, setItems] = useState("Produce");
  const [text, setText] = useState("");

  function inputsValue(event) {
    setText(event.target.value);
  }
  function handleCategory(event) {
    setItems(event.target.value);
  }
  function handleTheSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: text,
      category: newItems,
      
    };
    onItemFormSubmit(newItem)
  }
  

  return (
    <form className="NewItem" onSubmit={handleTheSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={inputsValue} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
