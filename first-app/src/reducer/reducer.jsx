export const initialState = {
  expenses: [],
  selectedCategory: "Toutes",
  totalForSelectedCategory: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "SET_SELECTED_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_TOTAL_FOR_SELECTED_CATEGORY":
      return { ...state, totalForSelectedCategory: action.payload };
    default:
      return state;
  }
};
