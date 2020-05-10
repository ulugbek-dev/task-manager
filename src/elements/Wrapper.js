import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    padding-top: ${props => props.navbar ? '0' : '70px'};

    @media (min-width: 576px) {
        ${props => props.navbar ? css`
            display: flex;
            align-items: center;
            padding: 0 30px;
            width: 100%;
        ` : css`
            padding: 100px 30px 50px 30px;
        `}
        max-width: 960px;
        margin: auto;
    }
`