import React from "react";
import "./header.scss";

function Header({ title }) {
  return (
    <header>
      <h3>{title}</h3>
    </header>
  );
}
// this code run when we dont have a props.
Header.defaultProps = {
  title: "Default Title",
};
export default Header;
