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
        :before {
            content: '';
            position: absolute;
            width: 50px;
            height: 100%;
            transform: skew(-20deg) translateX(-100px);
            background: rgb(0,0,0);
            background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 50%, rgba(54,123,174,0) 100%);
            animation: shining 1800ms infinite 100ms;
        }
    }

    @keyframes shining {
        to {
            transform: skew(-20deg) translateX(500px);
        }
    }
`