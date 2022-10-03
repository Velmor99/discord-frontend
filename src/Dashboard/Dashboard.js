import React from 'react';
import {styled} from '@mui/system';
import Sidebar from './Sidebar/Sidebar';
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";
import AppBar from "./AppBar/AppBar";
import Messenger from "./Messenger/Messenger";

const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex'
})

const Dashboard = () => {
    return (
        <Wrapper>
            <Sidebar />
            <FriendsSidebar />
            <Messenger />
            <AppBar />
        </Wrapper>
    )
}

export default Dashboard