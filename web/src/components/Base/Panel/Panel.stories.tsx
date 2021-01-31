import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import _Panel, { PanelProps } from "./Panel";

export default {
  title: "Base/Panel",
  component: _Panel,
  args: {
    width: "unset",
    height: "unset"
  }
} as Meta<PanelProps>;

export const Panel: React.VFC<PanelProps> = (args: PanelProps) => (
  <_Panel {...args} />
);
