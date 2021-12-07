import React from 'react';
import { Story, Meta } from '@storybook/react';

const Component = () => <>Hello World</>;

export default {
  title: 'Test',
  component: Component,
  parameters: {
    componentSubtitle: 'Component Test',
  },
} as Meta;

export const StoryComponent: Story<any> = (args) => <Component {...args} />;
