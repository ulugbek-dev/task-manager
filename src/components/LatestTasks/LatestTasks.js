import React from 'react';
import { LatestTasksStyled } from './styled';
import { Headline } from '../../elements/Headline';
import { Card } from '../../elements/Card';

function LatestTasks ({ lastestTasks }) {
    return (
        <Card>
            <LatestTasksStyled>
                <Headline>Latest Created Tasks</Headline>
                <ul>
                    {lastestTasks && lastestTasks.map(t => <li>t</li>)}
                </ul>
            </LatestTasksStyled>
        </Card>
    );
}

export default LatestTasks;