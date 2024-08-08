import React from "react";
import { useLoaderData } from "react-router-dom";
import Menu from "./Menu";

const Menues = () => {
  const { categories } = useLoaderData(); // Destructure 'categories' from the loaded data

  return (
    <div>
      <h1>Our Menus: {categories.length}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {categories.map((menu) => (
          <Menu key={menu.idCategory} menu={menu} /> // Pass each category to the Menu component
        ))}
      </div>
    </div>
  );
};

export default Menues;
