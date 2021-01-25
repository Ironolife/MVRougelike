import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import _TabContent, { TabContentProps } from "./TabContent";

export default {
  title: "Base/Tab Content",
  component: _TabContent,
  args: {
    header: "header"
  }
} as Meta;

export const TabContent: React.VFC<TabContentProps> = (
  args: TabContentProps
) => <_TabContent {...args} />;
