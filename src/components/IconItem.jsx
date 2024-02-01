import React from "react";

function IconItem({ icon }) {
  return (
    <div className="rounded-full hover:bg-slate-500/15 p-1.5 flex items-center cursor-pointer transition-all duration-150 ">
      {icon}
    </div>
  );
}

export default IconItem;
