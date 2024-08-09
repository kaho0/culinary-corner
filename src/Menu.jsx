import React from "react";
import PropTypes from "prop-types";

const Menu = ({ menu }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#ff8c00" }}>{menu.strCategory}</h2>
      <img
        src={menu.strCategoryThumb}
        alt={menu.strCategory}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <p style={{ marginTop: "10px", color: "#555" }}>
        {menu.strCategoryDescription}
      </p>
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
