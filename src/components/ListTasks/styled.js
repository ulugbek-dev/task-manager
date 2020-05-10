import styled from 'styled-components';
import { primaryColor, headlineTextColor } from '../../variables';

export const ListTasksStyled = styled.ul`
    padding: 0;
    list-style: none;
    background: white;
    padding: 0 15px;

    li {
        display: flex;
        justify-content: space-between;
        padding: 26px 0;
        font-size: 20px;
        color: ${primaryColor};
        :not(:last-child) {
            border-bottom: 1px solid #E8E8E8;
        }

        input {
            margin-right: 12px;
            margin-top: 8px;
        }

        svg:last-child {
            margin-left: 16px;
        }

        path {
            color: #647278;
        }

        span:first-child {
            width: calc(100% - 60px);
            display: flex;
        }

        label.completed {
            color: ${headlineTextColor};
            text-decoration: line-through;
        }
    }

    li.loading {
        filter: grayscale(1);
        opacity: .6;
        position: relative;
        pointer-events: none;
    }


    @media (min-width: 576px) {
        border-radius: 12px;
    }
`