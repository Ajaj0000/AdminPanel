import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Order } from '../Orders'

const Stack = createStackNavigator();

function OrderStack() {


    return (
        <>
            <Stack.Navigator >
                <Stack.Screen name="Orders" options={{headerShown:false}} component={Order} />
            </Stack.Navigator>
        </>
    )
}
export { OrderStack }