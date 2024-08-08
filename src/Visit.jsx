import React from "react";
import visitImage from "./assets/Visit.jpg";
import "./styles.css"; // Import global styles

const Visit = () => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${visitImage})`,
      }}
    >
      <h2>Visit Us</h2>
      <p>
        We invite you to experience Panache for yourself. Located at 1234
        Culinary Lane, Glenwood, we’re open Tuesday through Sunday from 11:00 AM
        to 10:00 PM. For reservations or inquiries, please contact us at (555)
        123-4567 or info@panacherestaurant.com. Thank you for choosing Panache.
        We look forward to serving you soon!
      </p>
    </div>
  );
};

export default Visit;
