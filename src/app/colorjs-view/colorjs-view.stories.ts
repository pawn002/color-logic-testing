import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

// import Button from './button.component';
// import Header from './header.component';
import { ColorjsViewComponent } from './colorjs-view.component';

export default {
  title: 'App/color.js view',
  component: ColorjsViewComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'centered',
  },
} as Meta;

const Template: Story<ColorjsViewComponent> = (args: ColorjsViewComponent) => ({
  props: args,
});

export const Typical = Template.bind({});
Typical.args = {};
