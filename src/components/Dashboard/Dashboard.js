import React from 'react';
import { DashboardStyled } from './styled';
import Navbar from '../Navbar/Navbar';
import EmptyTasks from '../EmptyTasks/EmptyTasks';

function Dashboard () {
    return (
        <DashboardStyled>
            <Navbar />

            <EmptyTasks />
        </DashboardStyled>
    );
}

export default Dashboard;