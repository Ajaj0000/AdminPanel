import 'react-native-gesture-handler';
import '../gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Route } from './Navigations/Route';
import LoginScreen from './Screens/Admins/LoginScreen';
import { Provider } from 'react-redux';
import { store } from './Store/StoreCofigur';

function App() {


  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <LoginScreen />
        </NavigationContainer>
      </Provider>
    </>
  )
}
export { App }