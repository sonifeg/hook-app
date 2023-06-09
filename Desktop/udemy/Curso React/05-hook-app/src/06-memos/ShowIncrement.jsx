import React from "react";

export const ShowIncrement = React.memo( ({ increment }) => {
  console.log("ops i did it again");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Increment
    </button>
  )
})
