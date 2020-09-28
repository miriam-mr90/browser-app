import React from 'react';
import styled, { css } from "styled-components";

const StyledPagination = styled.nav`
    align-self: center;
    margin-top: 20px;
`;

const StyledPaginationList = styled.ul`
    align-self: center;
    background: ${props => props.theme.color.main};
    display: flex;
    max-width: max-content;
    border-radius: 4px;
`;

const StyledPaginationItem = styled.li`
    padding: 12px 18px;
    flex: 1;

    &:first-child {
        border-radius: 4px 0 0 4px;
    }

    &:last-child {
        border-radius: 0 4px 4px 0;
    }

    ${props => props.active && css`
        background: ${props => props.theme.color.mainLight};
    `}
`;

const Pagination = () => (
    <StyledPagination>
        <StyledPaginationList>
            <StyledPaginationItem active>1</StyledPaginationItem>
            <StyledPaginationItem>2</StyledPaginationItem>
            <StyledPaginationItem>3</StyledPaginationItem>
            <StyledPaginationItem>4</StyledPaginationItem>
            <StyledPaginationItem>></StyledPaginationItem>
        </StyledPaginationList>
    </StyledPagination>
);

export default Pagination;
