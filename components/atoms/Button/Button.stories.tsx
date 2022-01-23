import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { Props as ButtonProps, ButtonTheme } from './Button';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Outline = Template.bind({});
Outline.args = {
  text: 'Outline',
  theme: ButtonTheme.outline,
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  text: 'NoBorder',
  theme: ButtonTheme.noBorder,
};

export default {
  title: 'Button',
  component: Button,
} as Meta;
