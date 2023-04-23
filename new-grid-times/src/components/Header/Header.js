import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';
import Spacer from '../Spacer';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
  
        <MidHeader>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <Logo />
          <ActionGroup column gap={6}>
            <Spacer axis="vertical" size={14} />
            <Button>
              Subscribe
            </Button>
            <Anchor href='/'>Already a subscriber?</Anchor>
          </ActionGroup>
        </MidHeader>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MidHeader = styled(Row)`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.gap ?? 24}px;
  flex-direction: ${props => props.column ? "column" : "row"};

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  ${QUERIES.tabletAndUp} {
    display: block;
  }
`;

const Anchor = styled.a`
  font-size: 1rem;
  font-style: italic;
  text-decoration: underline;
  color: var(--color-gray-700);
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const LogoWrapper = styled.div`
@media ${QUERIES.tabletAndUp} {
  display: none;
}
`

export default Header;
