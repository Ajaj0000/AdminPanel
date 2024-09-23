import 'react-native-gesture-handler';
import React, { useState } from "react";
import { ActivityIndicator, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../Screens/Dashboard/DashboardParent/Dashboard';
import { CategoryMain } from '../Screens/Category/CategoryParent/CategoryMain';
import { CollectionStack } from '../Screens/Products/Collections/CollectionParent/CollectionStack';
import { OrderStack } from '../Screens/Orders/OrdersChild/OrderStack';

const Tab = createBottomTabNavigator()

function Route() {

    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 1500);


    return (
        <>
            {
                loading ?
                    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size='large' color='#00A688' />
                    </View>
                    :
                    <>

                        <Tab.Navigator
                            screenOptions={{
                                drawerType: 'slide',
                            }}
                            backBehavior='history'
                        >
                           
                            <Tab.Screen options={{headerShown:true}} name="Dashboard" component={Dashboard} />
                            <Tab.Screen name='Collections' options={{headerShown:false}} component={CollectionStack} />
                            <Tab.Screen name='Category' options={{headerShown:false}} component={CategoryMain} />
                            <Tab.Screen name='Order' options={{headerShown:false}} component={OrderStack}/>
                        </Tab.Navigator>
                    </>
            }

        </>
    )
}


export { Route }