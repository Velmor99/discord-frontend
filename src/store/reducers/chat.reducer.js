import { chatActions } from "../actions/chat.actions";

const initialState = {
  messages: [],
  chatType: null,
  chosenChatDetails: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case chatActions.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
        chosenChatDetails: action.chatDetails,
        chatType: action.chatType,
        messages: [],
      };
    case chatActions.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default reducer;
