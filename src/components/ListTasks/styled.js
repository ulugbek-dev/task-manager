import styled from 'styled-components';
import { primaryColor } from '../../variables';

export const ListTasksStyled = styled.ul`
    padding: 0;
    list-style: none;
    background: white;
    padding: 0 15px;

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 0;
        font-size: 20px;
        color: ${primaryColor};
        :not(:last-child) {
            border-bottom: 1px solid #E8E8E8;
        }

        input {
            margin-right: 12px;
        }

        svg:last-child {
            margin-left: 16px;
        }

        path {
            color: #647278;
        }
    }
`