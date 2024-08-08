import React from "react";
import homeImage from "./assets/home.jpg";
import Header from "./Header"; // Import Header component
import "./styles.css"; // Import global styles

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* Header at the top, outside of the image container */}
      <Header />

      {/* Full-screen background image */}
      <div
        className="container"
        style={{
          backgroundImage: `url(${homeImage})`,
        }}
      >
        <h2 className="">Welcome to Panache</h2>
        <p>Experience the best dining with us</p>
      </div>
    </div>
  );
};

export default Home;
