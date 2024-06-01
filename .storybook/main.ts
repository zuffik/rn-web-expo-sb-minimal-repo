import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import fs from 'fs';

const config: StorybookConfig = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/assets': path.resolve(__dirname, '../assets'),
      '@/components': path.resolve(__dirname, '../components'),
      '@/constants': path.resolve(__dirname, '../constants'),
      '@/hooks': path.resolve(__dirname, '../hooks'),
    };

    return config;
  },
};
export default config;
