import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserProfileListDebounce from './src/UserProfileListDebounce';
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProfileListDebounce />
    </QueryClientProvider>
  );
};
export default App;