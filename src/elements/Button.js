import styled from 'styled-components';
import { primaryColor, primaryColorHover } from '../variables';

export const Button = styled.button`
    background: ${primaryColor};
    width: 100%;
    font-size: 14px;
    color: white;
    padding: 11px 16px;
    border-radius: 8px;
    border: 1px solid ${primaryColor};
    margin: 6px 0;
    transition: 150ms;
    cursor: pointer;

    :hover {
        background: ${primaryColorHover};
    }
`