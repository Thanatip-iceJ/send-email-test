import React from "react";

function Button() {
  return (
    <div>
      <input
        type="submit"
        className="font-semidbold bg-orange-500 hover:bg-orange-500/80 font-semibold text-white py-2 w-full rounded-md cursor-pointer transition-all duration-150"
        value={"Send Email"}
      />
    </div>
  );
}

export default Button;
