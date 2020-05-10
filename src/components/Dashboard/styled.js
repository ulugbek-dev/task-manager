import styled from 'styled-components';

export const DashboardStyled = styled.div`
    .search-container {
        display: flex;
        flex-direction: column;
        margin: 15px;

        button {
            margin: 0;
        }

        .content {
            padding-top: 100px;
        }
    }

    .info {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 576px) {
        .search-container {
            flex-direction: row;
            justify-content: space-between;
            margin: 0;
            align-items: center;
            margin-top: 16px;
        }
        .search-inner-container {
            display: flex;
            
            button {
                margin: 6px 0;
                width: auto;
                margin-left: 12px;
            }
        }
    }

    @media (min-width: 992px) {
        .info {
            flex-direction: row;
        }
    }
`