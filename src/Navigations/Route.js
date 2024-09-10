import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Profile } from '../Screens';

const Drawer = createDrawerNavigator();

function Route() {

    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name='Home' component={Home} />
                    <Drawer.Screen name='Profile' component={Profile} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export { Route }