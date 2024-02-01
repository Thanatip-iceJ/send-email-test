import React from "react";

function Input({ title = "init", value, bold, name, onChange }) {
  return (
    <div className="flex border-b py-3 w-full">
      <div className="flex gap-3 w-full">
        <p>{`${title}:`}</p>
        <input
          type="text"
          className={"border-none outline-none w-full rounded-md " + bold}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Input;
