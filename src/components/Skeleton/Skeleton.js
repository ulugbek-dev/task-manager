import React from 'react';
import { SkeletonStyled } from './styled';

function Skeleton() {
    return (
        <SkeletonStyled>
            <div className="info">
                <div className="completed">
                    <div className="headline"></div>
                    <div className="score"></div>
                </div>
                <div className="latest">
                    <div className="headline"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                    <div className="task"></div>
                </div>
                <div className="chart">
                    <div className="circle"></div>
                </div>
            </div>
            <div className="search-box">
                <div className="headline"></div>
                <div className="search-inner-box">
                    <div className="input"></div>
                    <div className="input"></div>
                </div>
            </div>
            <div className="tasks">
                <div className="item">
                    <div className="task"></div>
                    <div className="icon"></div>
                </div>
                <div className="item">
                    <div className="task"></div>
                    <div className="icon"></div>
                </div>
                <div className="item">
                    <div className="task"></div>
                    <div className="icon"></div>
                </div>
                <div className="item">
                    <div className="task"></div>
                    <div className="icon"></div>
                </div>
                <div className="item">
                    <div className="task"></div>
                    <div className="icon"></div>
                </div>
            </div>
        </SkeletonStyled>
    );
}

export default Skeleton;