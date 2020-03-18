import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store';
import Root from './Root';
const reduxStore = configureStore();

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <Root />
      </ReduxProvider>
    );
  }
}
export default App;
