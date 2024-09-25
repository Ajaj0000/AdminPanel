import 'react-native-gesture-handler';
import React, { useState } from "react";
import { ActivityIndicator, Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../Screens/Dashboard/DashboardParent/Dashboard';
import { CategoryMain } from '../Screens/Category/CategoryParent/CategoryMain';
// import { CollectionStack } from '../Screens/Products/Collections/CollectionParent/CollectionStack';
import { OrderStack } from '../Screens/Orders/OrdersChild/OrderStack';
import Icorder from '../Assets/Icons/booking.png';
import Icorder1 from '../Assets/Icons/booking1.png';
import IcCategory from '../Assets/Icons/categories.png';
import IcCategory1 from '../Assets/Icons/categories1.png';
import IcDashboard from '../Assets/Icons/dashboard.png';
import IcDashboard1 from '../Assets/Icons/dashboard2.png';


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
                            screenOptions={({route})=>({
                                drawerType: 'slide',
                               tabBarActiveTintColor:"black",
                            })}
                            backBehavior='history'

                        >
                            <Tab.Screen options={{ headerShown: false, tabBarIcon: (({focused}) => <Image source={focused ? IcDashboard : IcDashboard1} style={{ width: 31, height: 31 }}/>) }} name="Dashboard" component={Dashboard} />
                            <Tab.Screen name='Categories' options={{ headerShown: false, tabBarIcon: (({focused}) => <Image source={focused ? IcCategory1 : IcCategory} style={{ width: 31, height: 31 }} />) }} component={CategoryMain} />
                            <Tab.Screen name='Order' options={{ headerShown: false, tabBarBadge: 3, tabBarIcon: (({focused}) => <Image source={focused ? Icorder : Icorder1} style={{ width: 31, height: 31 }} />) }} component={OrderStack} />
                        </Tab.Navigator>
                    </>
            }

        </>
    )
}


export { Route }