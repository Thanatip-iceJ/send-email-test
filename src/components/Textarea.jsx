import React from "react";

function Textarea({ name, value, onChange }) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      id=""
      cols="30"
      rows="10"
      className="w-full mt-4 outline-none border rounded-lg p-3"
    ></textarea>
  );
}

export default Textarea;
