const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Valera" },
    { id: 5, name: "Roma" },
    { id: 6, name: "Fedya" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "no" },
    { id: 3, message: "yes" },
    { id: 4, message: "do" },
    { id: 5, message: "homework" },
    { id: 6, message: "I am" },
  ],
  newMessageBody: "",
};

const dialogReducer = (state = initialState, action) => {

switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return  {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return  {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 7, message: body }]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogReducer;
