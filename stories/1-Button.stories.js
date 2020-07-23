import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import App from './../src/App'

export default {
  title: 'Todo App',
  component: Button,
};

export const app = () => <App/>;