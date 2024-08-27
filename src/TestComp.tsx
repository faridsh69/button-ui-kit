import React from "react";

export const TestComp = (props) => {
  const { label } = props;

  return (
    <div>
      <button>{label}</button>
    </div>
  );
};
