import React, { useState } from 'react';
import { styles } from './DrawerStyle';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import icArrow from '../Assets/Icons/right-arrow.png';
import icDownArrow from '../Assets/Icons/arrow-down-sign-to-navigate.png';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, } from '@react-navigation/drawer';

function CustomDrawer(props) {

    const [menuIndex, setMenuIndex] = useState(-1)

    const dropRoute = [
        {
            id: 1,
            title: "Orders",
            menuList: [
                { id: "a1", listTitle: "Draft" },
                { id: "a2", listTitle: "Orders", route: "Orders" },
            ]
        },
        {
            id: 2,
            title: "Products",
            menuList: [
                { id: "b1", listTitle: "Collections", route: "Collection" },
                { id: "b2", listTitle: "Inventory", route: "Inventory" },
                { id: "b3", listTitle: "Purchases", route: "PurchasesOrders" },
                { id: "b4", listTitle: "Transfers", route: "Transfers" },
                { id: "b5", listTitle: "Gift Card", route: "GiftCard" },
            ]
        },
        {
            id: 3,
            title: "Customers",
            menuList: [
                { id: "c1", listTitle: "Customers", route: "Customers" },
                { id: "c2", listTitle: "Segments", route: "Segments" },
            ]
        },
        {
            id: 4,
            title: "Contents",
            menuList: [
                { id: "d1", listTitle: "Contents", route: "Contents" },
                { id: "d2", listTitle: "Metaobjects", route: "Metaobjects" },
                { id: "d3", listTitle: "Files", route: "Files" },
            ]
        },
        {
            id: 5,
            title: "Analytics",
            menuList: [
                { id: "e1", listTitle: "Analytics", route: "Analytics" },
                { id: "e2", listTitle: "Reports", route: "Reports" },
                { id: "e3", listTitle: "Live View", route: "LiveView" },
            ]
        },
        {
            id: 6,
            title: "Marketing",
            menuList: [
                { id: "f1", listTitle: "Markiting", route: "Markiting" },
                { id: "f2", listTitle: "Compaigns", route: "Compaigns" },
                { id: "f3", listTitle: "Automations", route: "Automations" },
            ]
        },
        {
            id: 7,
            title: "Discounts",
            menuList: [
                { id: "g1", listTitle: "Discounts", route: "Discounts" }
            ]
        },
        {
            id: 8,
            title: "Online Store",
            menuList: [
                { id: "h1", listTitle: "Online Store", route: "OnlineStore" },
                { id: "h2", listTitle: "Themes", route: "Themes" },
                { id: "h3", listTitle: "Blog Post", route: "Blog" },
                { id: "h4", listTitle: "Pages", route: "Pages" },
                { id: "h5", listTitle: "Navigation", route: "Navigation" },
                { id: "h6", listTitle: "Prefrences", route: "Prefrences" },
            ]
        }
    ]


    return (

        <DrawerContentScrollView {...props}>

            {/* <DrawerItemList {...props} /> */}
            {/* <DrawerItem 
            focused={true}
            label={({color})=><Text style={{color:"red"}}>Home</Text>}
            onPress={()=>{
                props.navigation.navigate('Home')
            }}
            /> */}

            <View>
                {
                    dropRoute.map((items, index) => {
                        return (
                            <>
                                {/* <View>
                                    <DrawerItem
                                        focused={true}

                                        label={({ color }) => <Text style={{ color: "red" }}>{items.title}</Text>}
                                        onPress={() => {
                                            // props.navigation.navigate('Home')
                                            setMenuIndex(index)
                                        }}
                                    />
                                </View> */}

                                <TouchableOpacity key={index} style={styles.list} onPress={() => { setMenuIndex(index) }}>
                                    <Text>{items.title}</Text>
                                    {menuIndex === index ? <Image source={icDownArrow} style={{ width: 14, height: 14 }} /> : <Image source={icArrow} style={{ width: 14, height: 14 }} />}
                                </TouchableOpacity>

                                {menuIndex === index && <View>
                                    {
                                        items.menuList && items.menuList.map((ite, index) => {
                                            return (
                                                <>
                                                    <View style={styles.LiteList}>
                                                        <DrawerItem
                                                            focused={true}
                                                            label={({focused, color }) => <Text style={{ color }}>{focused ? ite.route : ite.route}</Text>}
                                                            onPress={() => {
                                                                {ite.route ? props.navigation.navigate(ite.route) : ''}
                                                                setMenuIndex(index)
                                                            }}
                                                            activeTintColor='red'
                                                            inactiveTintColor='blue'
                                                        />
                                                        {/* {menuIndex === index ? <Image source={icDownArrow} style={{ width: 14, height: 14 }} /> : <Image source={icArrow} style={{ width: 14, height: 14 }} />} */}
                                                    </View>
                                                    {/* <TouchableOpacity key={index} style={styles.LiteList}>
                                                        <Text style={styles.ListListText}>{ite.listTitle}</Text>
                                                    </TouchableOpacity> */}
                                                </>
                                            )
                                        })
                                    }
                                </View>}

                            </>
                        )
                    })
                }
            </View>
        </DrawerContentScrollView>
    );
}
export { CustomDrawer }