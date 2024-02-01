import React from "react";

function Button() {
  return (
    <div>
      <input
        type="submit"
        className="font-semidbold bg-orange-500 font-semibold text-white py-2 w-full rounded-md cursor-pointer"
        value={"Send Email"}
      />
    </div>
  );
}

export default Button;
