import io from 'socket.io-client'
import {setPendingFriendsInvitations, setFriends, setOnlineUsers} from '../store/actions/friendsActions';
import store from '../store/store';
import {updateDirectChatHistoryIfActive} from '../shared/utils/chat';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token
    socket = io('http://localhost:5022', {
        auth: {
            token: jwtToken,
        }
    })

    socket.on('connect', () => {
        // console.log('succesfully connected with socket.io server');
        // console.log(socket.id)
    });

    socket.on('friends-invitations', (data) => {
        const {pendingInvitations} = data
        store.dispatch(setPendingFriendsInvitations(pendingInvitations))
    })

    socket.on('friends-list', (data) => {
        const {friends} = data;
        console.log('friends', friends)
        store.dispatch(setFriends(friends))
    })

    socket.on('online-users', (data) => {
        const {onlineUsers} = data
        store.dispatch(setOnlineUsers(onlineUsers))
    })

    socket.on("direct-chat-history", (data) => {
        console.log('receive', data)
        updateDirectChatHistoryIfActive(data);
    })
}

export const sendDirectMessage = (data) => {
    console.log('data', data)
    socket.emit('direct-message', data)
}

export const getDirectChatHistory = (data) => {
    console.log(data)
    socket.emit("direct-chat-history", data)
}