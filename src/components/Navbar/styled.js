import styled from 'styled-components';
import { shadow, navTextColor } from '../../variables';

export const NavbarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: white;
    height: 72px;
    padding: 0 15px;
    box-shadow: ${shadow};

    div {
        display: flex;
        align-items: center;
    }

    .profile-image {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin-right: 16px;
    }

    p, a {
        color: ${navTextColor};
        font-size: 16px;
    }
`