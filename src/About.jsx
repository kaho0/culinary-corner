import React from "react";
import aboutImage from "./assets/About.jpg";
import "./styles.css"; // Import global styles

const About = () => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${aboutImage})`,
      }}
    >
      <h2>About Us</h2>
      <p>
        Welcome to Panache! At Panache, we believe in the art of fine dining and
        the joy of savoring exquisite flavors. Established in 2015, our
        restaurant has quickly become a cherished local gem, renowned for its
        creative fusion dishes and inviting atmosphere.
      </p>
      <h2>Our Story</h2>
      <p>
        Panache was founded by culinary enthusiasts Julia and Michael Thompson,
        who shared a dream of blending their love for diverse cuisines into a
        unique dining experience. From our modest beginnings in downtown
        Glenwood, we have grown into a vibrant dining destination with a devoted
        following.
      </p>
    </div>
  );
};

export default About;
