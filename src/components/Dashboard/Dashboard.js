import React from 'react';
import { DashboardStyled } from './styled';
import Navbar from '../Navbar/Navbar';
import EmptyTasks from '../EmptyTasks/EmptyTasks';
import ListTask from '../ListTask/ListTask';
import { useGet } from '../../hooks/useGet';
import { useSelector } from 'react-redux';


function Dashboard () {
    // Fetch & Dispatch tasks
    const getTasks = useGet('/tasks', 'TASKS');

    // Get tasks from store
    const tasks = useSelector(state => state.tasks);

    console.log(tasks)

    return (
        <DashboardStyled>
            <Navbar />

            {tasks.length === 0 ? <EmptyTasks /> : (
                <ul>
                    {tasks.map((t, i) => (
                        <ListTask
                            key={i}
                            name={t.name}
                            completed={t.completed}
                        />
                    ))}
                </ul>
            )}
        </DashboardStyled>
    );
}

export default Dashboard;