import styled from 'styled-components';
import { primaryColor } from '../variables';

export const Input = styled.input`
    background: #EEF1F8;
    width: 100%;
    font-size: 14px;
    color: #7A7D7E;
    padding: 11px 16px;
    border-radius: 8px;
    border: 1px solid #EEF1F8;
    margin: 6px 0;

    :focus {
        border: 1px solid ${primaryColor};
    }
`