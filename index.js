import React from "react";
import ReactDOM from "react-dom/client";

// Write your React code here
const element = React.createElement("h1", null, "Hello, React Using CDN!");

// Render the element into the root div
const interEle = ()=>{
    return(
        <h3>This is inner element</h3>
    )
}


const renderEle = ()=>{
    return(
        <h1>This is the component trial</h1>
        <h3>We can add many sub-headings as well</h3>
        <interEle/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
