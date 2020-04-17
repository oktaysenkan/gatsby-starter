import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: red;
  color: ${(props) => props.theme.secondaryColor};
  padding: 6px 20px;
  border-radius: 4px;
  border: 0px;
`;

const Button = ({ children }) => <ButtonWrapper>{children}</ButtonWrapper>;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
