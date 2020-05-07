import styled from 'styled-components';
import { headlineTextColor, shadow } from '../../variables';

export const LoginStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translateX(-50%) translateY(-60%);
    width: calc(100% - 30px);
    animation: loginAnim 500ms forwards 300ms;
    
    form {
        background: white;
        border-radius: 12px;
        padding: 24px;
        box-shadow: ${shadow};
    }

    p {
        margin-bottom: 18px;
    }
    
    .backend-validation {
        color: red;
            margin-bottom: 2px;
            margin-top: -4px;
            font-size: 14px;
            text-align: center;
        }
    }

    @keyframes loginAnim {
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(-50%);
        }
    }
`