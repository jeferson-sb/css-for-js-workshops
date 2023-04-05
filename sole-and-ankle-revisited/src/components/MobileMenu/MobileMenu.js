import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent, Dialog } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <MenuOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <MenuContent>
        <UnstyledButton onClick={onDismiss}>
          <Icon id='close' />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </UnstyledButton>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href='/terms'>Terms and Conditions</FooterLink>
          <FooterLink href='/privacy'>Privacy Policy</FooterLink>
          <FooterLink href='/contact'>Contact Us</FooterLink>
        </Footer>
      </MenuContent>
    </MenuOverlay>
  );
};

const MenuContent = styled(DialogContent)`
  position: fixed;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  height: 100%;
  width: min(300px, 100% - 4rem);
  padding: 2rem;
`;

const MenuOverlay = styled(DialogOverlay)`
  background-color: hsla(0, 10%, 10%, 0.5);
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 22px;
  flex-direction: column;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: var(--fw-medium);

  &:first-of-type {
    color: var(--secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  gap: 14px;
  flex-direction: column;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--gray-700);
  font-size: 0.875rem;
`;

export default MobileMenu;
