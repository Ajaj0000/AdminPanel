import 'react-native-gesture-handler';
import '../gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Route } from './Navigations/Route';
import LoginScreen from './Screens/Admins/LoginScreen';

function App() {


  return (
    <>

      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    </>
  )
}
export { App }