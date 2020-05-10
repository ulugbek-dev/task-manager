import styled from 'styled-components';
import { shadow } from '../../variables';

export const AddTaskStyled = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    opacity: 0;
    animation: fadeIn 500ms forwards;

    .content {
        position: absolute;
        width: calc(100% - 30px);
        top: 20%;
        left: 50%;
        z-index: 9;
        background: white;
        padding: 24px;
        border-radius: 12px;
        box-shadow: ${shadow};
        opacity: 0;
        transform: translateX(-50%) translateY(-10%);
        animation: fadeInModal 500ms forwards;

        button {
            margin-top: 6px;
        }

        p {
            margin-bottom: 18px;
        }
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fadeInModal {
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @media (min-width: 576px) {
        .content {
            max-width: 300px;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`