import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import _MainPanel, { MainPanelProps } from "./MainPanel";

export default {
  title: "Components/Main Panel",
  component: _MainPanel
} as Meta;

export const MainTab: React.VFC<MainPanelProps> = (args: MainPanelProps) => (
  <_MainPanel {...args} />
);
