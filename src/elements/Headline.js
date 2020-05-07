import styled from 'styled-components';
import { headlineTextColor } from '../variables';

export const Headline = styled.p`
    color: ${headlineTextColor};
    font-size: 20px;
    text-align: ${props => props.center ? 'center' : 'left'};
`