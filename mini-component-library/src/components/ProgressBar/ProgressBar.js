import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--radius': 4 + 'px',
    '--height': '8px',
  },
  medium: {
    '--radius': 4 + 'px',
    '--height': '12px',
  },
  large: {
    '--radius': 8 + 'px',
    '--height': '16px',
    '--padding': '4px',
  },
};

const ProgressBar = ({ value, size }) => {
  const dynamicStyles = SIZES[size];

  return (
    <Container
      role='progressbar'
      aria-valuenow={value}
      aria-valuemax={100}
      aria-valuemin={0}
      style={dynamicStyles}
    >
      <Bar length={value} />
      <VisuallyHidden>Progress value {value}</VisuallyHidden>
    </Container>
  );
};

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.length}%;
  height: 100%;
  border-top-left-radius: calc(var(--radius) / 2);
  border-bottom-left-radius: calc(var(--radius) / 2);
`;

const Container = styled.div`
  height: var(--height);
  width: 100%;
  background-color: ${COLORS.gray50};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  overflow: hidden;
  padding: var(--padding, 0);
`;

export default ProgressBar;
