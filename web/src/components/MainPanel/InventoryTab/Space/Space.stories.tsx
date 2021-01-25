import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import _Space, { SpaceProps } from "./Space";
import InventoryIcon from "../../../Icons/InventoryIcon";

export default {
  title: "Components/Main Panel/Inventory Tab/Space",
  component: _Space
} as Meta;

export const Space: React.VFC<SpaceProps> = (args: SpaceProps) => (
  <_Space {...args}>
    <InventoryIcon />
  </_Space>
);
