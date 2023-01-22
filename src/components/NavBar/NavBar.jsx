import React from "react";
import styled from "styled-components";

import { ReactComponent as NewWindow } from "../../assets/images/logo.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/icon-arrow-down.svg";
import { ReactComponent as ThemeIcon } from "../../assets/images/theme-switcher-temp.svg";
import { ReactComponent as Moon } from "../../assets/images/icon-moon.svg";
import { Colors } from "../../theme/Colors";

const NavBar = () => {
  return (
    <Nav>
      <NavUl>
        <LogoContainer>
          <NewWindow />
        </LogoContainer>
        <FontSelectorContainer>
          Sans Serif <ArrowDown />
        </FontSelectorContainer>
        <ThemeSwitcher>
          <ThemeIcon />
        </ThemeSwitcher>
        <ActiveTheme>
          <Moon />
        </ActiveTheme>
      </NavUl>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 1rem 1rem;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  gap: 0.5rem;
`;

const LogoContainer = styled.li`
  flex-grow: 1;
`;

const FontSelectorContainer = styled.li`
  border-right: 1px solid ${Colors.MediumLightGray};
  padding-right: 0.4rem;
`;

const ThemeSwitcher = styled.li``;

const ActiveTheme = styled.li``;

export default NavBar;
