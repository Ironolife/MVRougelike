import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import _Button, { ButtonProps } from "./Button";

export default {
  title: "Base/Button",
  component: _Button
} as Meta;

export const Button: React.VFC<ButtonProps> = (args: ButtonProps) => (
  <_Button {...args}>Button</_Button>
);
