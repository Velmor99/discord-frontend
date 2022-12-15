import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {Box} from '@mui/material';
import IconButton from '@mui/material/IconButton';

const InvitantionDecisionButtons = ({disabled, acceptInvitantionHandler, rejectInvitantionHandler}) => {
    return (
        <Box sx={{display: 'flex'}}>
            <IconButton
            style={{color: 'white'}}
            disabled={disabled}
            onClick={acceptInvitantionHandler}
            >
                <CheckIcon />
            </IconButton>
            <IconButton
            style={{color: 'white'}}
            disabled={disabled}
            onClick={rejectInvitantionHandler}
            >
                <ClearIcon />
            </IconButton>
        </Box>
    )
}

export default InvitantionDecisionButtons;