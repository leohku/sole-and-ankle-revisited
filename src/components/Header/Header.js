import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <MenuWrapper>
            <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={2} />
              <VisuallyHidden>Shopping Bag</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" strokeWidth={2} />
              <VisuallyHidden>Search</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={2} />
              <VisuallyHidden>Menu</VisuallyHidden>
            </UnstyledButton>
          </MenuWrapper>
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
  border-bottom: 1px solid hsl(var(--color-gray-300));
  overflow-x: auto;
  overflow-y: hidden;

  @media ${QUERIES.tabletAndDown} {
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1.8rem,
    4.1vw - 1.5rem,
    3rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const MenuWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 17px;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: hsl(var(--color-gray-900));
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: hsl(var(--color-secondary));
  }
`;

export default Header;
