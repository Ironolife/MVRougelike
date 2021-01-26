import React from "react";

export interface TabContentProps {
  className?: string;
  header: string | JSX.Element;
  footer?: string | JSX.Element;
  flex?: boolean;
}

const TabContent: React.FC<TabContentProps> = ({
  className = "",
  header,
  footer = null,
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
      {footer && (
        <div className="pt-2 mt-4 text-xl capitalize border-t border-gray-400">
          {footer}
        </div>
      )}
    </div>
  );
};

export default TabContent;
