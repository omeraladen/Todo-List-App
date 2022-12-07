import React,{useRef} from "react";
import {FaPlus} from 'react-icons/fa';
import "./add_item.scss";


function AddItem({ newItem , setNewItem , handleSubmit}) {
  const inputRef = useRef();
  return (
  <form onSubmit={handleSubmit}>
    
    <input 
        autoFocus
        ref={inputRef}
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
      onClick={() => inputRef.current.focus()}
     >
      <FaPlus/>
     </button>
  </form>
  )
}

export default AddItem;
