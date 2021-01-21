import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './scr/screens/IndexScreen';
import React from 'react';
import { Provider } from './scr/context/BlogContex';
import ShowScreen from './scr/screens/ShowScreen';
import CreateScreen from './scr/screens/CreateScreen';

const navigator = createStackNavigator ({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen

}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <Provider> 
    <App />
    </Provider>
};