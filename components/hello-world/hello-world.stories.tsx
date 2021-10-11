import React from "react";
import { Story, Meta } from "@storybook/react";
import HelloWorld, { Props as HelloWorldProps } from "./hello-world";

const Template: Story<HelloWorldProps> = (args) => <HelloWorld {...args} />;

export const NameStory = Template.bind({});
NameStory.args = {
  name: "Nick",
};

export default {
  title: "HelloWorld",
  component: HelloWorld,
} as Meta;
