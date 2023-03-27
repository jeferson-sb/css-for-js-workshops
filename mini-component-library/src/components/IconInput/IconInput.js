import React, { useId } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const dynamicStyles = {
    small: {
      '--fs': '80%',
      '--icon-size': '18px',
    },
    large: {
      '--fs': '100%',
      '--icon-size': '24px',
    },
  };

  return (
    <Container style={{ '--width': width, ...dynamicStyles[size] }}>
      <Input placeholder={placeholder} />
      <SearchIcon id={icon} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Container>
  );
};

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${COLORS.gray500};
  width: var(--icon-size);

  svg {
    width: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  width: calc(var(--width) * 1px);

  &:hover input,
  &:hover svg {
    color: ${COLORS.black};
  }

  &:focus input {
    outline: 1px solid #4374cb;
  }
`;

const Input = styled.input`
  all: unset;
  outline: transparent solid 2px;
  outline-offset: 2px;
  position: relative;
  height: 2.5rem;
  width: 100%;
  font-size: var(--fs);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: inherit;
  padding-inline-start: 2rem;
  color: ${COLORS.gray700};
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray300};
  }

  &:focus {
    outline: 1px solid #4374cb;
  }
`;

export default IconInput;
