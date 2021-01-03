import React from 'react';
import { connect } from 'react-redux';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageTextCreator(body))
                },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);
export default DialogsContainer;