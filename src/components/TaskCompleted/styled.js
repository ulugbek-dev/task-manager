import styled from 'styled-components';
import { shadow, primaryColor, textColor } from '../../variables';

export const TaskCompletedStyled = styled.div`
    background: white;
    margin: 4px 0;
    box-shadow: ${shadow};
    padding: 24px 32px;

    p:first-child {
        margin-bottom: 4px;
    }

    .completed {
        font-size: 64px;
        color: ${primaryColor};
        font-weight: 500;

        span {
            font-size: 20px;
            color: ${textColor};
        }
    }
`