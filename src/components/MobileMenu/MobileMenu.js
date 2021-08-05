/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Side />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Side>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-backdrop);
`

const Content = styled(DialogContent)`
  margin-left: auto;
  width: clamp(${300 / 16}rem, 80%, ${880 / 16}rem);
  height: 100%;
  background: var(--color-white);
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Side = styled.div`
  flex: 1;
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  width: 100%;
  padding: 6px 0;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: var(--weight-medium);
  width: 100%;
  padding: 4px 0;
`;

export default MobileMenu;
