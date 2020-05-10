import styled from 'styled-components';
import { skeletonBg, skeletonText, shadow } from '../../variables';

export const SkeletonStyled = styled.div`
    position: relative;
    overflow-x: hidden;
    opacity: .8;
    :before {
        content: '';
        position: absolute;
        height: 100%;
        width: 200px;
        transform: skew(-20deg) translateX(-400px);
        background: rgb(0,0,0);
        z-index: 2;
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 50%, rgba(54,123,174,0) 100%);
        animation: skeleton 2200ms infinite 100ms;
    }

    .completed, .latest, .chart {
        background: ${skeletonBg};
        box-shadow: ${shadow};
        width: 100%;
        padding: 24px 32px;
        margin: 8px 0;

        .headline {
            width: 55%;
            height: 20px;
            background: ${skeletonText};
            margin-bottom: 20px;
            border-radius: 3px;
        }
        .task {
            background: ${skeletonText};
            width: 80%;
            height: 14px;
            margin-top: 8px;
            border-radius: 3px;
        }
        .score {
            width: 37px;
            height: 50px;
            background: ${skeletonText};
            margin-top: 20px;
            position: relative;
            border-radius: 3px;
            :after {
                border-radius: 3px;
                background: ${skeletonText};
                content: '';
                position: absolute;
                height: 20px;
                width: 15px;
                bottom: 0;
                right: 0;
                transform: translateX(120%);
            }
        }
        .circle {
            width: 120px;
            height: 120px;
            margin: auto;
            border-radius: 50%;
            background: ${skeletonText};
        }
    }

    .search-box {
        width: 100%;
        padding: 15px;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        
        .search-inner-box {
            display: flex;
            flex-direction: column;
        }
        
        .headline {
            width: 55px;
            height: 20px;
            background: ${skeletonText};
            margin: auto;
            margin-bottom: 10px;
            border-radius: 3px;
        }

        .input {
            width: 100%;
            height: 40px;
            background: ${skeletonText};
            margin: 8px 0;
            border-radius: 8px;
        }
    }

    .tasks {
        background: ${skeletonBg};
        width: 100%;
        padding: 24px 16px;

        .item {
            display: flex;
            justify-content: space-between;
            
            .task {
                background: ${skeletonText};
                width: 40%;
                height: 14px;
                margin-top: 8px;
                border-radius: 3px;
            }

            .icon {
                background: ${skeletonText};
                width: 18px;
                height: 18px;
                margin-top: 8px;
                border-radius: 3px;
                position: relative;
                :before {
                    background: ${skeletonText};
                    content: '';
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    left: -120%;
                    top: 0;
                }           
            }
        }
    }

    @keyframes skeleton {
        to {
            transform: skew(-20deg) translateX(1000px);
        }
    }

    @media (min-width: 992px) {
        .completed, .latest {
            margin-right: 24px;
        }
        .search-box {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0;
            
            .search-inner-box {
                flex-direction: row;
                width: 40%;
                justify-content: space-between;

                .input {
                    width: 60%;
                    margin-left: 12px;
                    :last-child {
                        width: 40%;
                    }
                }
            }
            .headline {
                width: 100px;
                margin: 0;
            }
        }
        .tasks {
            margin-top: 20px;

            .item {
                margin: 15px 0;
                
                :not(:last-child) {
                    margin-bottom: 30px;
                }
            }
        }
    }
`