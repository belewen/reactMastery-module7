import React, { useState } from "react";

function CompoundComponents() {
  return (
    <div>
      <h1>Compunds components</h1>
      <CompundComponentParent>
        <CheckBox></CheckBox>
        <StatusBox></StatusBox>
      </CompundComponentParent>
    </div>
  );
}

function CompundComponentParent({ children }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked((prevValue) => !prevValue);
  };
  const cloned = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, { isChecked, handleCheck });
  });

  return cloned;
}

function CheckBox({ isChecked, handleCheck }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      </label>
    </div>
  );
}

function StatusBox({ isChecked }) {
  return <p>{isChecked ? " checkbox check ok" : "checkbox non check"}</p>;
}

export default CompoundComponents;
