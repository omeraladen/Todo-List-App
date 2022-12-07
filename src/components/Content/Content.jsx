import React from "react";
import ListItems from "../ListIetms/Listiems";
import "./content.scss";

function Content({ items, handleCheck, handleDelete }) {
  return (
    <>
      <ListItems
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default Content;
