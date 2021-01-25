import React from "react";

export interface TabContentProps {
  className?: string;
  header: string;
  flex?: boolean;
}

const TabContent: React.FC<TabContentProps> = ({
  className = "",
  header,
  flex = true,
  children
}) => {
  return (
    <div
      className={
        "flex flex-col mr-4 last:mr-0" +
        " " +
        (flex && "flex-1") +
        " " +
        className
      }
    >
      <div className="pb-2 mb-4 text-xl capitalize border-b border-gray-400">
        {header}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default TabContent;
