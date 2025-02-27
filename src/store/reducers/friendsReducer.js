import { friendsActions } from "../actions/friendsActions";

const initialState = {
  friends: [],
  pendingFriendsInvitantions: [],
  onlineUsers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case friendsActions.SET_PENDING_FRIENDS_INVITANTIONS:
      return {
        ...state,
        pendingFriendsInvitantions: action.pendingFriendsInvitations
        ,
      };
    case friendsActions.SET_FRIENDS:
      return {
        ...state,
        friends: [...action.friends],
      };
    case friendsActions.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers,
      };

    default:
      return state;
  }
};

export default reducer;
