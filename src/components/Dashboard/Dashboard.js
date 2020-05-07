import React, { useState } from 'react';
import { DashboardStyled } from './styled';
import Navbar from '../Navbar/Navbar';
import EmptyTasks from '../EmptyTasks/EmptyTasks';
import ListTasks from '../ListTasks/ListTasks';
import Search from '../Search/Search';
import AddTask from '../AddTask/AddTask';
import { useGet } from '../../hooks/useGet';
import { useSelector } from 'react-redux';
import { Headline } from '../../elements/Headline';
import { Button } from '../../elements/Button';

function Dashboard () {
    // Fetch & Dispatch tasks
    const getTasks = useGet('/tasks', 'TASKS');

    // Get tasks from store
    const tasks = useSelector(state => state.tasks);

    // Modal state
    const [modal, setModal] = useState(false);

    // Close Modal handler
    const handleModalClose = () => setModal(false);

    return (
        <DashboardStyled>
            <Navbar />

            {tasks.length === 0 ? <EmptyTasks /> : (
                <>
                    <div className="search-container">
                        <Headline center>Tasks</Headline>
                        <Search />
                        <Button fullWidth onClick={() => setModal(true)}>+ New Task</Button>
                    </div>
                    <ListTasks tasks={tasks} />
                </>
            )}

            {modal && <AddTask handleModalClose={handleModalClose} />  }  
        </DashboardStyled>
    );
}

export default Dashboard;