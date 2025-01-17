import React from "react";
import ReactDOM from "react-dom/client";
import Restaurants from "./Constants/Restaurants";

// Write your React code here

// Render the element into the root div

const RenderEle = () => {
  return (
    <div>
      <h1>This is the component trial</h1>
      <h3>We can add many sub-headings as well</h3>
      <h4>{Restaurants[0].price_range}</h4>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RenderEle />);
