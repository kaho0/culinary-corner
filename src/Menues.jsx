import React from "react";
import { useLoaderData } from "react-router-dom";
import Menu from "./Menu";

const Menues = () => {
  const { categories } = useLoaderData();

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>
        Our Menus: {categories.length}
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {categories.map((menu) => (
          <Menu key={menu.idCategory} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default Menues;
