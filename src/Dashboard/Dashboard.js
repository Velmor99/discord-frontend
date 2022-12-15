import React, {useEffect} from 'react';
import {styled} from '@mui/system';
import Sidebar from './Sidebar/Sidebar';
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";
import AppBar from "./AppBar/AppBar";
import Messenger from "./Messenger/Messenger";
import { logout } from '../shared/utils/auth';
import {connect} from 'react-redux';
import {getActions} from '../store/actions/auth.actions';
import {connectWithSocketServer} from '../realtimeCommunication/socketConnection';

const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex'
})

const Dashboard = ({setUserDetails}) => {

    useEffect(() => {
        const userDetails = localStorage.getItem('user');

        if(!userDetails) {
            logout();
        } else {
            setUserDetails(JSON.parse(userDetails));
            connectWithSocketServer(JSON.parse(userDetails))
        }
    }, [])

    return (
        <Wrapper>
            <Sidebar />
            <FriendsSidebar />
            <Messenger />
            <AppBar />
        </Wrapper>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(Dashboard);