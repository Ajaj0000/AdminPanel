import 'react-native-gesture-handler';
import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer } from './CustomDrawer';
import { ActivityIndicator, View } from 'react-native';
import { ScreensArray } from '../Screens/Constants/Constants';

const Drawer = createDrawerNavigator();

function Route() {

    const [loading, setLoading] = useState(false)
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

                        <Drawer.Navigator
                            drawerContent={(props) => <CustomDrawer {...props} />}
                            screenOptions={{
                                drawerType: 'slide',
                            }}
                            backBehavior='history'
                            
                        >
                            {
                                ScreensArray.map((item, index) => {
                                    return (
                                        <>
                                            <Drawer.Screen key={index} name={item.label} component={item.component} />
                                        </>
                                    )
                                })
                            }
                        </Drawer.Navigator>
                    </>
            }

        </>
    )
}


export { Route }