import React from 'react';
import styled from "styled-components";

const StyledFilters = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledSelection = styled.div`
    margin: 20px 12px;

    label {
        margin-right: 10px;
    }

    select {
        border-radius: 4px;
        padding: 4px 6px;
    }
`;


const Filters = ({filterResults}) => (
    <StyledFilters>
        <StyledSelection>
            <label >Difficulty</label>
            <select onChange={e => filterResults('difficulty', e.target.value)}>
                <option value='none'>All</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>
        </StyledSelection>

        <StyledSelection>
            <label >Type</label>
            <select onChange={e => filterResults('type', e.target.value)}>
                <option value='none'>All</option>
                <option value='multiple'>Multiple</option>
                <option value='boolean'>Boolean</option>
            </select>
        </StyledSelection>
    </StyledFilters>
);

export default Filters;
