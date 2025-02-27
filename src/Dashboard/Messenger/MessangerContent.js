import {useEffect} from 'react';
import {styled} from '@mui/system';
import Messages from './Messages/Messages';
import NewMessageInput from './NewMessageInput';
import { getDirectChatHistory } from '../../realtimeCommunication/socketConnection';

const Wrapper = styled("div")({
    flexGrow: 1,

})

const MessangerContent = ({chosenChatDetails}) => {
    useEffect(() => {
        // TODO 
        // feaching chat history from specific userId
        getDirectChatHistory({
            receiverUserId: chosenChatDetails.id,
        })
    }, [chosenChatDetails])
    return (
        <Wrapper>
            <Messages />
            <NewMessageInput />
        </Wrapper>
    )
}

export default MessangerContent