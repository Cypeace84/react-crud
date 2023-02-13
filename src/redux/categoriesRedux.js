import initialState from './initialState';

//selectors
export const getAllCategories = (state) => state.categories;
console.log('getAllCat:', getAllCategories(initialState));

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'add':
      return;

    default:
      return statePart;
  }
};

export default categoriesReducer;
