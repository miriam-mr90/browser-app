import React from 'react';
import styled, { css } from "styled-components";

const StyledLoader = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;

`;

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 58px;
`;

const LoaderItem = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background: ${props => props.theme.color.main};
    animation: bouncedelay 1.4s infinite ease-in-out both;

    ${props => props.one && css`
        animation-delay: -0.32s;
    `}

    ${props => props.two && css`
        animation-delay: -0.16s;
    `}

    @keyframes bouncedelay {
        0%,
        80%,
        100% {
            -webkit-transform: scale(0);
            transform: scale(0)
        }
        40% {
            transform: scale(1);
            -webkit-transform: scale(1)
        }
    }
`;

const Loader = () => (
    <StyledLoader>
        <LoaderWrapper>
            <LoaderItem one />
            <LoaderItem two />
            <LoaderItem />
        </LoaderWrapper>
    </StyledLoader>
);

export default Loader;
