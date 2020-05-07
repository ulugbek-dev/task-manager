import styled from 'styled-components';
import { shadow } from '../../variables';

export const EmptyTasksStyled = styled.div`
    background: white;
    width: 100%;
    padding: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
    box-shadow: ${shadow};

    button {
        margin-top: 20px;
    }
`