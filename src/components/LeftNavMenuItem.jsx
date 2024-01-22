import React from "react";

const LeftNavMenuItem = ({ text, icon, className, action }) => {
  return (
    <React.Fragment>
      {text && (
        <div
          className={
            "text-white w-[200px] text-sm font-medium cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
            className
          }
          onClick={action}
        >
          <span className="text-xl mr-5">{icon}</span>
          {text}
        </div>
      )}
    </React.Fragment>
  );
};

export default LeftNavMenuItem;
