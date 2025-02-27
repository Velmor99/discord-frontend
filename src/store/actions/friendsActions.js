import { openAlertMessage } from "./alert.actions";
import * as api from "../../api";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITANTIONS: "FRIENDS.SET_PENDING_FRIENDS_INVITANTIONS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptFriendInvitantion: (data) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitantion: (data) => dispatch(rejectFriendInvitation(data)),
  };
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
  // console.log("from action", pendingFriendsInvitations);
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITANTIONS,
    pendingFriendsInvitations,
  };
};

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends,
  }
}

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitantion(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitantion has been sent!"));
      closeDialogHandler();
    }
  };
};

const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.acceptFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitantion accepted!"));
    }
  };
};

const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.rejectFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitantion rejected!"));
    }
  };
};

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: friendsActions.SET_ONLINE_USERS,
    onlineUsers
  }
}
