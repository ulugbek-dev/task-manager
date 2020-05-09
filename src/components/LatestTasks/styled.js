import styled from 'styled-components';
import { textColor } from '../../variables';

export const LatestTasksStyled = styled.div`
    ul {
        padding-left: 20px;
        margin-bottom: 0;

        li {
            color: ${textColor};
            font-size: 14px;
            line-height: 1.5;
        }
        li.completed {
            text-decoration: line-through;
        }
    }
`