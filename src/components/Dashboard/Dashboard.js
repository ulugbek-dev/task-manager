import React, { useState } from 'react';
import { DashboardStyled } from './styled';
import Navbar from '../Navbar/Navbar';
import EmptyTasks from '../EmptyTasks/EmptyTasks';
import ListTasks from '../ListTasks/ListTasks';
import TaskCompleted from '../TaskCompleted/TaskCompleted';
import LatestTasks from '../LatestTasks/LatestTasks';
import Skeleton from '../Skeleton/Skeleton';
import PieChart from '../PieChart/PieChart';
import Search from '../Search/Search';
import AddTask from '../AddTask/AddTask';
import { useGet } from '../../hooks/useGet';
import { useUpdate } from '../../hooks/useUpdate';
import { useSelector } from 'react-redux';
import { Headline } from '../../elements/Headline';
import { Button } from '../../elements/Button';
import { Wrapper } from '../../elements/Wrapper';

function Dashboard () {
    // Fetch & Dispatch tasks
    const getTasks = useGet('/tasks', 'TASKS');
    const getDashboard = useUpdate();

    // Get tasks from store
    const tasks = useSelector(state => state.tasks);
    const dashboard = useSelector(state => state.dashboard);

    // Modal state & Close Modal handler
    const [modal, setModal] = useState(false);
    const handleModalClose = () => setModal(false);

    // Show Dashboard
    const showDashboard = () => <>
        <div className="info">
            <TaskCompleted completed={dashboard.tasksCompleted} total={dashboard.totalTasks} />
            <LatestTasks latestTasks={dashboard.latestTasks} />
            <PieChart completed={dashboard.tasksCompleted} total={dashboard.totalTasks} />
        </div>
        <div className="search-container">
            <Headline center>Tasks</Headline>
            <Search />
            <Button fullWidth onClick={() => setModal(true)}>+ New Task</Button>
        </div>
        <ListTasks tasks={tasks} />
    </>;

    return (
        <DashboardStyled>
            <Navbar />

            <Wrapper>
                {(getTasks && getDashboard) ? <Skeleton /> : tasks.length > 0 && dashboard !== null 
                    ? showDashboard()
                    : <EmptyTasks />}
            </Wrapper>

            {modal && <AddTask handleModalClose={handleModalClose} />  }  
        </DashboardStyled>
    );
}

export default Dashboard;