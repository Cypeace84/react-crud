import shortid from 'shortid';

//selectors
export const getPostById = ({ posts }, id) =>
  posts.find((post) => post.id === id);
console.log(getPostById);

export const getAllPosts = (state) => state.posts;

export const getPostsByCategories = ({ posts }, category) =>
  posts.filter((post) => post.category === category);

// export const getAllCategories = (state) => state.categories;
// console.log('getAllCat:', getAllCategories(initialState));
// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
const TOGGLE_POST_BY_CATEGORIES = createActionName(' TOGGLE_POST_BY_CATEGORIE');
// action creators
export const removePost = (payload) => ({ type: REMOVE_POST, payload });
export const addPost = (payload) => ({ type: ADD_POST, payload });
export const editPost = (payload) => ({ type: EDIT_POST, payload });
export const togglePostByCategories = (payload) => ({
  type: TOGGLE_POST_BY_CATEGORIES,
  payload,
});
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return [...statePart.filter((post) => post.id !== action.payload)];

    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }];

    case EDIT_POST:
      return statePart.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    case TOGGLE_POST_BY_CATEGORIES:
      return statePart.map((post) =>
        post.category === action.category
          ? { ...post, category: !post.category }
          : post
      );

    default:
      return statePart;
  }
};

export default postsReducer;
