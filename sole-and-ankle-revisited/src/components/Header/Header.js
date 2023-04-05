import React from 'react';
import styled, { css } from 'styled-components/macro';

import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href='/sale'>A vendre</NavLink>
          <NavLink href='/new'>Nouvelles Versions</NavLink>
          <NavLink href='/men'>Hommes</NavLink>
          <NavLink href='/women'>Femmes</NavLink>
          <NavLink href='/kids'>Les enfants</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Side>
          <MenuGroup>
            <UnstyledButton>
              <Icon id='shopping-bag' strokeWidth={1} />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id='search' strokeWidth={1} />
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id='menu' strokeWidth={1} />
            </UnstyledButton>
          </MenuGroup>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--gray-300);
  overflow-x: auto;
  overflow-y: hidden;

  @media ${(props) => props.theme.queries.tablet} {
    justify-content: space-between;
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 2.4vw + 1rem, 3rem);
  margin: 0px 48px;

  @media ${(props) => props.theme.queries.tablet} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
  line-height: 0;

  @media ${(props) => props.theme.queries.tablet} {
    flex-grow: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: var(--fw-medium);
  white-space: nowrap;

  &:first-of-type {
    color: var(--secondary);
  }
`;

const MenuGroup = styled.div`
  display: none;
  gap: 28px;

  @media ${(props) => props.theme.queries.tablet} {
    display: inline-flex;
  }
`;

export default Header;
