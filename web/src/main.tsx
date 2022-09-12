import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Select the div with the ID root and render the App
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App /> {/*Component: always uppercase the first letter (we create it)*/}
  </React.StrictMode>
);
