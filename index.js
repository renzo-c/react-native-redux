import { AppRegistry } from 'react-native';
import App from './src/App';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducer';
import { name as appName } from './app.json';

const store = createStore(reducers);

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
