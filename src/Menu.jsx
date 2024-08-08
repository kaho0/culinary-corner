import React from "react";
import PropTypes from "prop-types";

const Menu = ({ menu }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        flex: "1 0 21%", // Allows 4 items per row
        maxWidth: "21%",
        boxSizing: "border-box",
      }}
    >
      <h2>{menu.strCategory}</h2>
      <img
        src={menu.strCategoryThumb}
        alt={menu.strCategory}
        style={{ width: "100px", height: "100px" }}
      />
      <p>{menu.strCategoryDescription}</p>
    </div>
  );
};

Menu.propTypes = {
  menu: PropTypes.shape({
    idCategory: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strCategoryThumb: PropTypes.string.isRequired,
    strCategoryDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default Menu;
