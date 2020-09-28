import React from 'react';
import styled from "styled-components";

import { ReactComponent as OrderIcon } from '../images/order.svg';

const StyledDataTable = styled.table`
    border-spacing: 0;
    text-align: left;

    td,
    th {
        border: 1px solid ${props => props.theme.color.tableBorders};
        padding: 6px 8px;
    }

    td {
        background: ${props => props.theme.color.tableRows};
    }

    th {
        background: ${props => props.theme.color.tableHeader};
        font-weight: bold;
        min-width: 60px;

        svg {
            fill: ${props => props.theme.color.main};
            height: 14px;
            vertical-align: middle;
        }
    }
`;

const DataTableRow = ({
    category,
    createdBy,
    difficulty,
    id,
    question,
    type,
}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{category}</td>
            <td>{type}</td>
            <td>{difficulty}</td>
            <td>{question}</td>
            <td>{createdBy}</td>
        </tr>
    );
};

const DataTable = ({ dataDisplayed }) => (
    <StyledDataTable>
        <thead>
            <tr>
                <th>ID <OrderIcon /></th>
                <th>Category</th>
                <th>Type</th>
                <th>Difficulty</th>
                <th>Question / Statement</th>
                <th>Created By</th>
            </tr>
        </thead>
        <tbody>
            {dataDisplayed.map((item, index) => (
                <DataTableRow {...item} key={index}/>
            ))}
        </tbody>
    </StyledDataTable>
);

export default DataTable;
