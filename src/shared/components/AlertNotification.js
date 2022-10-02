import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import {connect} from 'react-redux';
import {getActions} from '../../store/actions/alert.actions';

const AlertNotification = ({showAlertMessage, closeAlertMessage, alertMessageContent}) => {
    return (
        <Snackbar
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            open={showAlertMessage}
            onClose={closeAlertMessage}
            autoHideDuration={6000}
        >
            <Alert severity='info'>{alertMessageContent}</Alert>
        </Snackbar>
    )
}

const mapStoreStateToProps = ({alert}) => {
    return {
        ...alert,
    }
}

const mapActionstoProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(mapStoreStateToProps, mapActionstoProps)(AlertNotification)