/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox } from 'react-native';

import MainNavigation from "./src/navigations"
import { navigationRef } from './src/navigations/NavigationServices';





YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

class App extends React.Component {
  render() {
    return (
      <MainNavigation >
      </MainNavigation>
    );
  }
}

export default App;
