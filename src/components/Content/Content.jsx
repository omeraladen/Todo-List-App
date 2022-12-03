import React from "react";
import ListItems from "../ListIetms/Listiems";
import "./content.scss";

function Content({ items, handleCheck, handleDelete }) {
  return (
    <main>
      <ListItems
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </main>
  );
}

export default Content;
