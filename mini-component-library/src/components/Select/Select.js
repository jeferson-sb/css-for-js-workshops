import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect
        value={value}
        onChange={onChange}
        style={{ '--width': displayedValue.length * 10 }}
      >
        {children}
      </StyledSelect>

      <DownArrow id='chevron-down' size={24} strokeWidth={2} />
    </Wrapper>
  );
};

const StyledSelect = styled.select`
  --unit: 1px;

  all: unset;
  display: inline-block;
  width: calc(var(--width) * var(--unit));
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  padding-inline-end: 3rem;
  transition: color 500ms ease-out;

  &:focus {
    outline: 2px solid #4374cb;
  }
`;

const DownArrow = styled(Icon)`
  position: absolute;
  color: ${COLORS.gray700};
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  transition: color 500ms ease-out;
`;

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  cursor: pointer;

  &:hover select {
    color: ${COLORS.black};
  }

  &:hover svg {
    color: ${COLORS.black};
  }
`;

export default Select;
