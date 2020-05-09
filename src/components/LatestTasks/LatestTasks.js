import React from 'react';
import { LatestTasksStyled } from './styled';
import { Headline } from '../../elements/Headline';
import { Card } from '../../elements/Card';

function LatestTasks ({ latestTasks }) {
    return (
        <Card>
            <LatestTasksStyled>
                <Headline>Latest Created Tasks</Headline>
                {latestTasks && (
                    <ul>
                        {latestTasks.map((t,i) => <li key={i} className={t.completed ? 'completed' : ''}>
                            {t.name.length > 35 ? `${t.name.split('').filter((x,i) => i > 34).join('')} ...` : t.name}
                        </li>)}
                    </ul>
                )}
            </LatestTasksStyled>
        </Card>
    );
}

export default LatestTasks;