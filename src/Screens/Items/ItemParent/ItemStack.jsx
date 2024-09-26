import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ItemParent } from "./ItemParent";
import { ItemSection } from "../ItemChild/Additem";


const Stack = createStackNavigator();

function ItemStack() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Items" options={{headerShown:false}} component={ItemParent} />
                <Stack.Screen options={{headerShown:true}} name="Add Item" component={ItemSection}/>
            </Stack.Navigator>
        </>
    )
}
export { ItemStack }