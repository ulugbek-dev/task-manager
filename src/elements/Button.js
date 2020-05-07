import styled, { css } from 'styled-components';
import { primaryColor, primaryColorHover } from '../variables';

export const Button = styled.button`
    background: ${primaryColor};
    width: ${props => props.fullWidth ? '100%' : 'auto'};
    font-size: 14px;
    color: white;
    padding: 11px 16px;
    border-radius: 8px;
    border: 1px solid ${primaryColor};
    margin: 6px 0;
    transition: 150ms;
    cursor: pointer;
    position: relative;
    :before {
        ${props => props.loading ? css`
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 8px;
            cursor: not-allowed;
            background: ${primaryColor};
        ` : css`
            display: none;
        `}
    }
    :after {
        ${props => props.loading ? css`
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            top: 50%;
            left: 50%;
            cursor: not-allowed;
            background: transparent;
            border: 2px solid transparent;
            border-bottom: 2px solid white;
            border-radius: 50%;
            transform: translate(-50%, -50%) rotate(0);
            animation: loadingButton 1s infinite linear;
        ` : css`
            display: none;
        `
    }

    :hover {
        background: ${primaryColorHover};
    }

    @keyframes loadingButton {
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`