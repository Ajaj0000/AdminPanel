import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from '../Components/ScreenComponents/Home';
import { New } from '../Components/ScreenComponents/New';

const Drawer = createDrawerNavigator();

function Tabs() {

    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name='NewHome' component={Home}/>
                    <Drawer.Screen name='Loginn' component={New}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export { Tabs }