import React from 'react';
import RootNavigator from './navigation/index';
import { Provider } from 'react-redux';
import { store } from './app/store'

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
