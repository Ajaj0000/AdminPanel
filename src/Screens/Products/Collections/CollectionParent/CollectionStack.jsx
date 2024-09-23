import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CollectionDetail } from "../CollectionChild/CollectionDetail";
import { Collection } from "./Collection";

const Stack = createStackNavigator()

function CollectionStack() {

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Collection" options={{headerShown:false}} component={Collection} />
                <Stack.Screen name="Create Collection" component={CollectionDetail} />
            </Stack.Navigator>
        </>
    )
}
export { CollectionStack }