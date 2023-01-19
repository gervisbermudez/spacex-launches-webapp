import React from "react";

export default function Button(props: any) {
  return (
    <button
      className="rounded bg-transparent py-1 px-2 border border-solid border-app-dp-600 text-app-dp-600 hover:bg-app-white focus:bg-app-surface"
      {...props}
    >
      {props.children}
    </button>
  );
}
