import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
        padding: "10px 20px",
        zIndex: 1000, // Make sure it appears on top of everything
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ margin: 0 }}>Panache</h2>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/visit" style={{ color: "#fff", textDecoration: "none" }}>
          Visit
        </Link>
        <Link to="/menues" style={{ color: "#fff", textDecoration: "none" }}>
          Menu
        </Link>
      </nav>
    </div>
  );
};

export default Header;
