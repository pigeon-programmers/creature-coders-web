import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    dkGray: '#3D3D3D',
    mdGray: '#7E7E7E',
    red: '#E91717',
    orange: '#F08435',
    yellow: '#FFE600',
    green: '#4EDE1C',
    blue: '#2828FF',
    pink: '#ED1697',
  },
  fonts: ['sans-serif', 'Roboto', 'Kirang Haerang'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
