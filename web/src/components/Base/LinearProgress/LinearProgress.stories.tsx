import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import _LinearProgress, { LinearProgressProps } from "./LinearProgress";

export default {
  title: "Base/Linear Progress",
  component: _LinearProgress,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 }
    }
  },
  args: {
    value: 50
  }
} as Meta<LinearProgressProps>;

export const LinearProgress: React.VFC<LinearProgressProps> = (
  args: LinearProgressProps
) => <_LinearProgress {...args} />;
