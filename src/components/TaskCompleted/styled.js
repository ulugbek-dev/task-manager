import styled from 'styled-components';
import { primaryColor, textColor } from '../../variables';

export const TaskCompletedStyled = styled.div`
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