import styled from 'styled-components';
import { headlineTextColor, shadow } from '../../variables';

export const LoginStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 30px);
    
    div {
        background: white;
        border-radius: 12px;
        padding: 24px;
        box-shadow: ${shadow};
    }

    p {
        color: ${headlineTextColor};
        margin-bottom: 18px;
        font-size: 20px;
    }
`