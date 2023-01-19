import React from "react";

export default function Button({ text = "Button" }) {
  return (
    <button className="rounded py-1 px-2 border border-solid border-app-dp-600 text-app-dp-600">
      {text}
    </button>
  );
}
