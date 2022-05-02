import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

// import Button from './button.component';
// import Header from './header.component';
import { ChromajsViewComponent } from "./chromajs-view.component";

export default {
  title: 'App/chroma.js view',
  component: ChromajsViewComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<ChromajsViewComponent> = (args: ChromajsViewComponent) => ({
  props: args,
});

export const Typical = Template.bind({});
Typical.args = {

};

