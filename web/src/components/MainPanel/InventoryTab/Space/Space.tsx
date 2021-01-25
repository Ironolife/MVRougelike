import React from "react";

export interface SpaceProps {
  className?: string;
}

const Space: React.FC<SpaceProps> = ({ className = "", children }) => {
  return (
    <div
      className={
        "w-12 h-12 flex justify-center items-center border border-gray-200 bg-gray-100" +
        " " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Space;
