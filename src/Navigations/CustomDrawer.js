import React, { useState } from 'react';
import { styles } from './DrawerStyle';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import icArrow from '../Assets/Icons/right-arrow.png';
import icDownArrow from '../Assets/Icons/arrow-down-sign-to-navigate.png';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import adminPic from '../Assets/Images/man.png';

function CustomDrawer(props) {

    const [menuIndex, setMenuIndex] = useState(-1)
    const [activeRoute, setActiveRoute] = useState('')


    const dropRoute = [
        {
            id: 9,
            title: "Category",
            menuList: [
                { id: "01", listTitle: "Category", route: "Category" }
            ]

        },
        {
            id:10,
            title:"Item",
            menuList:[
                {id:"01", listTitle:"Item", route:"Item"}
            ]

        },
        {
            id: 0,
            title: "Dashboard",
            menuList: [
                { id: "01", listTitle: "Dashboard", route: "Dashboard" },
            ]
        },
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
                { id: "b3", listTitle: "Purchase", route: "PurchaseOrders" },
                { id: "b4", listTitle: "Transfers", route: "Transfers" },
                { id: "b5", listTitle: "Gift Card", route: "GiftCardMain" },
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
            <View style={styles.profile}>
                <Image source={adminPic} style={styles.adminPic} />
                <Text style={styles.adminName}>Mr.Admin</Text>
            </View>
            <View>
                {
                    dropRoute.map((items, index) => {
                        return (
                            <>
                                <TouchableOpacity key={index} style={styles.list} onPress={() => { setMenuIndex(menuIndex === index ? -1 : index) }}>
                                    <Text style={{ fontWeight: "500", color: "black" }}>{items.title}</Text>
                                    {menuIndex === index ? <Image source={icDownArrow} style={{ width: 14, height: 14 }} /> : <Image source={icArrow} style={{ width: 14, height: 14 }} />}
                                </TouchableOpacity>

                                {
                                    menuIndex === index && <View>
                                        {
                                            items.menuList && items.menuList.map((ite, index) => {
                                                return (
                                                    <>
                                                        {
                                                            ite.route ? <View style={styles.LiteList}>
                                                                <DrawerItem
                                                                    label={({ color }) => <Text style={{
                                                                        color: activeRoute === ite.route ? 'white' : 'white',
                                                                        fontWeight: activeRoute === ite.route ? 'bold' : 'normal'
                                                                    }}>{ite.listTitle}</Text>}
                                                                    onPress={() => {
                                                                        { ite.route ? props.navigation.navigate(ite.route) : '' }
                                                                        setMenuIndex(index)
                                                                        setActiveRoute(ite.route)
                                                                    }}
                                                                    style={{ backgroundColor: activeRoute === ite.route ? '#999999' : '#BBBBBB' }}
                                                                />
                                                            </View> :
                                                                null
                                                        }
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