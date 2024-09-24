import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { ItemStack } from '../../Items/ItemParent/ItemStack';
import { StackCategory } from './StackCategory';

const Tab = createMaterialTopTabNavigator()
function CategoryMain() {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name='Category' component={StackCategory} />
                <Tab.Screen name='Item' component={ItemStack} />
            </Tab.Navigator>
        </>
    )
}
export { CategoryMain }