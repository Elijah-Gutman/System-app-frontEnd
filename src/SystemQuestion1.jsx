import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

export function SystemQuestion1() {
  const handleShow = (system) => {
    console.log("handleShow", system);
  };
  // useEffect(handleIndex, []);
  return (
    <div>
      <h1>A question goes here</h1>
      <select>
        <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option>
      </select>
    </div>
  );
}
