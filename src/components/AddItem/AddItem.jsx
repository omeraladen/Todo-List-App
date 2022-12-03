import React from "react";
import {FaPlus} from 'react-icons/fa';
import "./add_item.scss";

function AddItem({ newItem , setNewItem , handleSubmit}) {
  return (
  <form onSubmit={handleSubmit}>
    
    <input 
    className="add-input"
      type="text" 
      placeholder="Add Item"
      id="addItem" required
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
     />
     <button
     type="submit"
     aria-label="Add Item"
     >
      <FaPlus/>
     </button>
  </form>
  )
}

export default AddItem;
