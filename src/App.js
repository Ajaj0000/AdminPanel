import 'react-native-gesture-handler';
import '../gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Route } from './Navigations/Route';

function App() {


  return (
    <>

      <NavigationContainer>
      {/* <StackNav/> */}
        <Route/>
      </NavigationContainer>
      {/* <DropdownExample/> */}
    </>
  )
}
export { App }