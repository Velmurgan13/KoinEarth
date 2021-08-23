import React from "react";

export default function Label(props) {
  return (
    <>
      <div
        className="inline-block px-2 py-1 text-xs rounded-lg mr-1 mb-1"
        style={{ backgroundColor: `#${props.color}` }}
      >
        <span>{props.name}</span>
      </div>
    </>
  );
}
