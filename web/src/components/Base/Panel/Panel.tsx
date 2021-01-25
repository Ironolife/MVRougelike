import React from "react";

export interface PanelProps {
  className?: string;
  width: string;
  height: string;
}

const Panel: React.FC<PanelProps> = ({
  className = "p-4",
  width,
  height,
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
