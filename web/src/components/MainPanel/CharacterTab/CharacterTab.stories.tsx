import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import _CharacterTab, { CharacterTabProps } from "./CharacterTab";

export default {
  title: "Components/Main Panel/Character Tab",
  component: _CharacterTab
} as Meta<CharacterTabProps>;

export const CharacterTab: React.VFC<CharacterTabProps> = (
  args: CharacterTabProps
) => <_CharacterTab {...args} />;
