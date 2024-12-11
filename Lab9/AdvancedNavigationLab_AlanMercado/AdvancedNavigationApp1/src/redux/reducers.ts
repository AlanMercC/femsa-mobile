const initialState = {
    theme: 'light',
  };
  
  const userPreferencesReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_THEME':
        return {
          ...state,
          theme: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userPreferencesReducer;