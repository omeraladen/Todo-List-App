import React from "react";
import "../ListIetms/list_items.scss";
import LineItem from "./LineItem";

function ListItems({ items, handleCheck, handleDelete }) {
  return (
    <div className="list-items">
      {items.length ? (
        <ul>
          {items.map((item) => (
            <LineItem
              key={item.id}
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            /> 
          ))}
        </ul>
      ) : (
        <img
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          alt="empty-cart"
          src="https://www.valeorx.com/static/media/empty-cart.60e68bfd.png"
        height={300}
        width={400}
        />
      )}
    </div>
  );
}

export default ListItems;
