const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you', likesCount: 13 },
        { id: 2, message: "It's my first post", likesCount: 12 },
        { id: 3, message: 'Hi, how are you2', likesCount: 13 },
        { id: 4, message: "It's my first post2", likesCount: 12 },
      ],
      newPostText: 'Replace this text',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Valera' },
        { id: 5, name: 'Roma' },
        { id: 6, name: 'Fedya' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'no' },
        { id: 3, message: 'yes' },
        { id: 4, message: 'do' },
        { id: 5, message: 'homework' },
        { id: 6, message: 'I am' },
      ],
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State was changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // { type: 'ADD-POST'}
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;
window.store = store;
