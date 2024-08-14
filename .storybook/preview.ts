import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
        { name: 'bright', value: '#f30' },
      ],
    },
    viewport: {
      viewports: {
        kindleFire2: {
          name: 'Kindle Fire 2',
          styles: {
            width: '600px',
            height: '963px',
          },
        },
        kindleFireHD: {
          name: 'Kindle Fire HD',
          styles: {
            width: '533px',
            height: '801px',
          },
        },
        iphone5: {
          name: 'Iphone 5',
          styles: {
            width: '320px',
            height: '568px',
          },
        },
      },
    },
  },
};

export default preview;
