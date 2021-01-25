import React from "react";
import TabContent from "../../Base/TabContent/TabContent";
import Space from "./Space/Space";

export interface InventoryTabProps {}

const inventory = Array(80).fill(null);

const InventoryTab: React.FC<InventoryTabProps> = ({}) => {
  return (
    <div className="h-full flex">
      <TabContent header="equipment">
        <div className="h-full flex items-center px-4">
          <div className="w-full flex flex-col" style={{ height: "440px" }}>
            <div className="flex justify-center">
              <Space>1</Space>
            </div>
            <div className="flex-1 flex items-center">
              <div>
                <Space className="mb-2">2</Space>
                <Space className="mb-2">3</Space>
                <Space className="mb-2">4</Space>
                <Space>5</Space>
              </div>
              <div className="flex-1"></div>
              <div>
                <Space className="mb-2">6</Space>
                <Space className="mb-2">7</Space>
                <Space className="mb-2">8</Space>
                <Space>9</Space>
              </div>
            </div>
            <div className="flex justify-center">
              <Space className="mr-2">10</Space>
              <Space>11</Space>
            </div>
          </div>
        </div>
      </TabContent>
      <TabContent header="inventory" flex={false}>
        <div className="h-full flex items-center px-4">
          <div className="grid grid-cols-10 gap-2">
            {inventory.map((_, i) => (
              <Space key={i} />
            ))}
          </div>
        </div>
      </TabContent>
    </div>
  );
};

export default InventoryTab;
