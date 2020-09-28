import React from 'react';
import styled from "styled-components";

import { ReactComponent as MenuIcon } from '../images/menu.svg';
import { ReactComponent as ChatIcon } from '../images/chat.svg';
import { ReactComponent as LoginIcon } from '../images/login.svg';
import { ReactComponent as PlusIcon } from '../images/plus.svg';
import { ReactComponent as MechanicalGearsIcon } from '../images/mechanical-gears.svg';

const StyledHeader = styled.header`
    background: ${props => props.theme.color.headerBg};
    color: ${props => props.theme.color.header};
    display: flex;
    justify-content: flex-end;
    margin-bottom: 24px;
    padding: 12px 20px;
`;

const StyledNav = styled.nav`
    font-weight: bold;
    text-transform: uppercase;

    ul {
        display: flex;
    }

    li {
        align-items: center;
        background: ${props => props.theme.color.buttonBg};
        display: flex;
        padding: 8px 14px;

        &:hover {
            cursor: pointer;
        }

        &:not(first-child) {
            margin-left: 8px;
        }

        svg {
            fill: ${props => props.theme.color.button};
            height: 14px;
            margin-right: 6px;
        }
    }
`;

const Header = ({toggleFiltersView}) => (
    <StyledHeader>
        <StyledNav>
            <ul>
                <li onClick={() => toggleFiltersView()}>
                    <MenuIcon /> Browse
                </li>
                <li>
                    <PlusIcon /> Add new questions
                </li>
                <li>
                    <MechanicalGearsIcon /> API
                </li>
                <li>
                    <ChatIcon /> Discuss
                </li>
                <li>
                    <LoginIcon />Login
                </li>
            </ul>
        </StyledNav>
    </StyledHeader>
);

export default Header;
