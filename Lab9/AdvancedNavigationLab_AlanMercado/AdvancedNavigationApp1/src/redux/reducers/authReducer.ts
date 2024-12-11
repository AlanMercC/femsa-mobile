const initialState = {
    user: {
      name: '',
      email: '',
      profilePicture: '',
    },
    userPreferences: {
        theme: 'light',
    },
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: {
            name: 'Alan Mercado',
            email: 'alan@femsa.com',
            profilePicture: 'https://avatars.githubusercontent.com/u/50228705?v=4',
          },
          isAuthenticated: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: {},
          isAuthenticated: false,
        };
        case 'UPDATE_USER':
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;