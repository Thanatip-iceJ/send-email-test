import React from "react";

function Input({ title = "init", value, bold, name }) {
  return (
    <div className="flex border-b py-3 w-full">
      <div className="flex gap-3 w-full">
        <p>{`${title}:`}</p>
        <input
          type="text"
          className={"border-none outline-none w-full " + bold}
          name={name}
        />
      </div>
    </div>
  );
}

export default Input;
