import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CategoryParent } from "./CategoryParent";
import { CreateCategoryScreen } from "../CategoryChild/AddCategory";

const Stack = createStackNavigator();

function StackCategory() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Category" options={{headerShown:false}} component={CategoryParent} />
                <Stack.Screen name="Add Category" component={CreateCategoryScreen} />
            </Stack.Navigator>
        </>
    )
}
export { StackCategory }