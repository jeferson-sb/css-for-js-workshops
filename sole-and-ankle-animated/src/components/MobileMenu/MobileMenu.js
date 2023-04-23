/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS, COLORS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale" data-order="1">
            Sale
          </NavLink>
          <NavLink href="/new" data-order="2">
            New&nbsp;Releases
          </NavLink>
          <NavLink href="/men" data-order="3">
            Men
          </NavLink>
          <NavLink href="/women" data-order="4">
            Women
          </NavLink>
          <NavLink href="/kids" data-order="5">
            Kids
          </NavLink>
          <NavLink href="/collections" data-order="6">
            Collections
          </NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms" data-order="7">
            Terms and Conditions
          </SubLink>
          <SubLink href="/privacy" data-order="8">
            Privacy Policy
          </SubLink>
          <SubLink href="/contact" data-order="9">
            Contact Us
          </SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadeInKeyframe = css`
  @keyframes fade-in-content {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(${COLORS.gray[700]} / 0.1);
  display: flex;
  justify-content: flex-end;
  will-change: background;
  animation: fade-in 400ms ease-out forwards;

  @keyframes fade-in {
    0% {
      background: hsl(${COLORS.gray[700]} / 0.1);
    }
    50% {
      background: hsl(${COLORS.gray[700]} / 0.5);
    }
    100% {
      background: hsl(${COLORS.gray[700]} / 0.8);
    }
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  animation: slide-right 600ms normal forwards;
  animation-timing-function: cubic-bezier(0.25, 0.27, 0.1, 1.01);

  transform: translateX(100%);

  @keyframes slide-right {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  --order: attr(data-order);
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  opacity: 0.1;
  animation: fade-in-content 600ms ease-out forwards;
  animation-delay: calc(var(--order) * 500ms);

  ${fadeInKeyframe}
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
