import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';
import { ImageCanvasComponent } from './image-canvas.component';

export default {
  title: 'App/Image Canvas',
  component: ImageCanvasComponent,
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

const Template: Story<ImageCanvasComponent> = (args: ImageCanvasComponent) => ({
  props: args,
});

export const Typical = Template.bind({});
Typical.args = {};
