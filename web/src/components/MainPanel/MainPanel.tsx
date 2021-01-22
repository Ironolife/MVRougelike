import React, { useState } from "react";
import Button from "../Base/Button/Button";
import Panel from "../Base/Panel/Panel";
import CharacterIcon from "../Icons/CharacterIcon";
import CloseIcon from "../Icons/CloseIcon";
import InventoryIcon from "../Icons/InventoryIcon";
import CharacterTab from "./CharacterTab/CharacterTab";
import InventoryTab from "./InventoryTab/InventoryTab";

const tabs = [
  {
    icon: CharacterIcon,
    component: CharacterTab,
    label: "character"
  },
  {
    icon: InventoryIcon,
    component: InventoryTab,
    label: "inventory"
  }
];

export interface MainPanelProps {}

const MainPanel: React.FC<MainPanelProps> = ({}) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Panel className="flex flex-col p-4" width="700px" height="550px">
      <div className="flex mb-4">
        {tabs.map((tab, i) => (
          <Button
            key={i}
            className="mr-2"
            onClick={() => setCurrentTab(i)}
            active={currentTab === i}
            ariaLabel={tab.label}
          >
            <tab.icon />
          </Button>
        ))}
        <div className="flex-1"></div>
        <Button ariaLabel="close">
          <CloseIcon />
        </Button>
      </div>
      <div className="flex-1">
        {tabs.map((tab, i) => currentTab === i && <tab.component key={i} />)}
      </div>
    </Panel>
  );
};

export default MainPanel;
