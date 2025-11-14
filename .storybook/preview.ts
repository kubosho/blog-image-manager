import { definePreview } from '@storybook/nextjs';

import '../src/app/globals.css';

export default definePreview({
  addons: [],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
});
