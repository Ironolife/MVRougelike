import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import _InventoryTab, { InventoryTabProps } from "./InventoryTab";

export default {
  title: "Components/Main Panel/Inventory Tab",
  component: _InventoryTab
} as Meta;

export const InventoryTab: React.VFC<InventoryTabProps> = (
  args: InventoryTabProps
) => <_InventoryTab {...args} />;
