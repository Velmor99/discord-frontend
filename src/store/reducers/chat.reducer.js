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
        chatType: action.chatType,
        chosenChatDetails: action.chatDetails,
        messages: [],
      };
    case chatActions.SET_CHAT_TYPE:
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default reducer;
