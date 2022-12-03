import React from "react";
import "./footer.scss";

function Footer({ length }) {
  return (
    <footer>
      <h3>
        {length} {length === 1 ? " item" : "items"}
      </h3>
    </footer>
  );
}

export default Footer;
