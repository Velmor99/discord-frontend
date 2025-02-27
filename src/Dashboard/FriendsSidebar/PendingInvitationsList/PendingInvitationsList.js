import {styled} from '@mui/system';
import PendingInvitantionsListItem from './PendingInvitationsListItem';
import {connect} from 'react-redux';

const MainContainer = styled('div')({
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
})

const PendingInvitationsList = ({pendingFriendsInvitantions}) => {
    // console.log('pending',pendingFriendsInvitantions)
    return (
        <MainContainer>
            {pendingFriendsInvitantions.map(invitantion => (
                <PendingInvitantionsListItem 
                key={invitantion._id}
                id={invitantion._id}
                username={invitantion.senderId.username}
                mail={invitantion.senderId.mail}
                />
            ))}
        </MainContainer>
    )
}

const mapStateToProps = ({friends}) => {
    return {
        ...friends,
    }
}

export default connect(mapStateToProps, null)(PendingInvitationsList)