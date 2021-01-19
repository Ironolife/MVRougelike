import React from "react";

export interface LinearProgressProps {
  value: number;
}

const LinearProgress: React.FC<LinearProgressProps> = ({ value }) => {
  return (
    <div className="w-full h-2 bg-gray-200">
      <div className="h-full bg-green-500" style={{ width: `${value}%` }}></div>
    </div>
  );
};

export default LinearProgress;
