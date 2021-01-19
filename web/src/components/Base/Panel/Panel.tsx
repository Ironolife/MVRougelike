import React from "react";

export interface PanelProps {
  width: string;
  height: string;
  className?: string;
}

const Panel: React.FC<PanelProps> = ({
  width,
  height,
  className = "p-4",
  children
}) => {
  return (
    <div
      className={"border border-gray-600" + " " + className}
      style={{ width, height }}
    >
      {children}
    </div>
  );
};

export default Panel;
