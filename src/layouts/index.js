import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: 'blue',
  secondaryColor: 'white',
};

// eslint-disable-next-line react/jsx-filename-extension
const Layout = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
