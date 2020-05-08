import React from 'react';
import { TaskCompletedStyled } from './styled';
import { Headline } from '../../elements/Headline';
import { Card } from '../../elements/Card';

function TaskCompleted ({ completed, total }) {
    return (
        <Card>
            <TaskCompletedStyled>
                <Headline>Tasks Completed</Headline>
                <p className="completed">{completed}<span>/ {total}</span></p>
            </TaskCompletedStyled>
        </Card>
    );
}

export default TaskCompleted;