import React from "react";
import { BsTrash } from "react-icons/bs";
import './line-item.scss';

function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        className="item-name"
      >
        {item.item}
      </label>
      <BsTrash
        onClick={() => {
          handleDelete(item.id);
        }}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
}

export default LineItem;
