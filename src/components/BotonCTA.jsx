import React from "react";

export default function BotonCTA({ texto, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        marginRight: "10px",
      }}
    >
      {texto}
    </button>
  );
}
