import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Component } from './component';

export default {
  title: 'Test',
  component: Component,
  parameters: {
    componentSubtitle: 'Component Test',
  },
} as Meta;

export const StoryComponent: Story<any> = (args) => <Component {...args} />;
