import styled from 'styled-components';
import { shadow } from '../variables';

export const Card = styled.div`
    background: white;
    margin: 5px 0;
    box-shadow: ${shadow};
    padding: 24px 32px;
    flex: 1;

    @media (min-width: 576px) {
        border-radius: 12px;
    }
    
    @media (min-width: 992px) {
        :not(:last-child) {
            margin-right: 24px;
        }
    }
`