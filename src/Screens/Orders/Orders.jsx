import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { Card, Badge } from 'react-native-paper';
import imgg from '../../Assets/Icons/ich.jpeg';

const orders = [
    {
        id: '#14432024-25',
        date: 'Yesterday at 8:33 pm',
        customer: 'Kiran Bishnoi',
        items: '1 item',
        status: 'Unfulfilled',
        amount: '₹700.00',
        shipping: 'Standard',
        fulfilled: false,
    },
    {
        id: '#14422024-25',
        date: 'Thursday at 08:53 pm',
        customer: 'Naveen Bohra',
        items: '1 item',
        status: 'Fulfilled',
        amount: '₹520.00',
        shipping: 'Standard',
        fulfilled: true,
    },
    {
        id: '#14412024-25',
        date: 'Sunday at 12:40 pm',
        customer: 'Bhawna Choudhary',
        items: '4 items',
        status: 'Fulfilled',
        amount: '₹1,190.00',
        shipping: 'Standard',
        fulfilled: true,
    },
    {
        id: '#14412024-25',
        date: 'Sunday at 12:40 pm',
        customer: 'Bhawna Choudhary',
        items: '4 items',
        status: 'Fulfilled',
        amount: '₹1,190.00',
        shipping: 'Standard',
        fulfilled: true,
    },
    {
        id: '#14412024-25',
        date: 'Sunday at 12:40 pm',
        customer: 'Bhawna Choudhary',
        items: '4 items',
        status: 'Fulfilled',
        amount: '₹1,190.00',
        shipping: 'Standard',
        fulfilled: true,
    },
    {
        id: '#14412024-25',
        date: 'Sunday at 12:40 pm',
        customer: 'Bhawna Choudhary',
        items: '4 items',
        status: 'Fulfilled',
        amount: '₹1,190.00',
        shipping: 'Standard',
        fulfilled: true,
    },
    {
        id: '#14412024-25',
        date: 'Sunday at 12:40 pm',
        customer: 'Bhawna Choudhary',
        items: '4 items',
        status: 'Fulfilled',
        amount: '₹1,190.00',
        shipping: 'Standard',
        fulfilled: true,
    },
    {
        id: '#14412024-25',
        date: 'Sunday at 12:40 pm',
        customer: 'Bhawna Choudhary',
        items: '4 items',
        status: 'Fulfilled',
        amount: '₹1,190.00',
        shipping: 'Standard',
        fulfilled: true,
    },
];



function Order() {

    // sort and input search

    const [modalVisible, setModalVisible] = useState(false);
    const [selectOption, setSelectOption] = useState('')

    const sortBy = [
        {
            title: "Product Title",
        },
        {
            title: "SKU"
        },
        {
            title: "Unavailabe"
        },
        {
            title: "Commited"
        },
        {
            title: "Available"
        },
        {
            title: "On hand"
        }
    ]

    return (
        <>
            <View style={styles.containerHeader}>
                <Text style={styles.order}>Orders</Text>
                <View style={styles.actionBox}>
                    <Text style={styles.drop}>More Action</Text>
                    <Text style={styles.create}>Create order</Text>
                </View>
            </View>

            <View style={styles.container}>
                <ScrollView>
                    {/* Time Filters */}
                    <View style={styles.topCont}>
                        <View style={styles.topBox}>
                            <Text style={styles.filterItem}>Today</Text>
                        </View>
                        <View style={styles.topBox}>
                            <Text style={styles.filterItem}>7 days</Text>
                        </View>
                        <View style={styles.topBox}>
                            <Text style={styles.filterItem}>30 days</Text>
                        </View>
                    </View>

                    {/* Statistics */}
                    <ScrollView horizontal={true}>
                        <View style={styles.statsContainer}>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>Total Orders</Text>
                                <Text style={styles.statValue}>0 --</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>Ordered items over time</Text>
                                <Text style={styles.statValue}>0 --</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>Returns</Text>
                                <Text style={styles.statValue}>0 --</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>Fulfilled orders over time</Text>
                                <Text style={styles.statValue}>0 --</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>Delivered orders over time</Text>
                                <Text style={styles.statValue}>0 --</Text>
                            </View>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>Time to fulfill</Text>
                                <Text style={styles.statValue}>0 min</Text>
                            </View>
                        </View>
                    </ScrollView>
                    {/* Search Input Section */}

                    <View style={styles.searchContainer}>

                        {/* Save as Button (Disabled) */}
                        <View style={styles.saveAsButton}>
                            <Text style={styles.saveAsText}>Search:</Text>
                        </View>
                        {/* Search Input */}
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Searching all collections"
                        />
                    </View>
                    {/* Filter */}
                    <View style={{ flexDirection: "row", }}>
                        <ScrollView horizontal={true}>
                            <View style={styles.statsContainer}>
                                <View style={styles.statBox}>
                                    <Text style={styles.statLabel}>All</Text>
                                </View>
                                <View style={styles.statBox}>
                                    <Text style={styles.statLabel}>Unfulfilled</Text>

                                </View>
                                <View style={styles.statBox}>
                                    <Text style={styles.statLabel}>Unpaid</Text>

                                </View>
                                <View style={styles.statBox}>
                                    <Text style={styles.statLabel}>Open</Text>

                                </View>
                                <View style={styles.statBox}>
                                    <Text style={styles.statLabel}>Archived</Text>

                                </View>
                                <View style={styles.statBox}>
                                    <Text style={styles.statLabel}>+</Text>

                                </View>
                            </View>
                        </ScrollView>

                        {/* search and sort icon */}
                        <View style={styles.statBoxx}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <View>
                                    <Image source={imgg} style={styles.statLabell} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* sort section */}
                        {
                            modalVisible && <View style={styles.sortSection}>
                                <Text>Sort By</Text>
                                {
                                    sortBy.map((item, index) => {
                                        return (
                                            <TouchableOpacity onPress={() => { setSelectOption(item.title); setModalVisible(false) }}>
                                                <View style={styles.radioCheck} key={index}>
                                                    <View style={styles.radioOuter} >
                                                        <View style={[styles.radioInner, { backgroundColor: selectOption === item.title ? 'black' : "white" }]}></View>
                                                    </View>
                                                    <Text style={{ color: "black" }}>{item.title}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        }

                    </View>


                    {/* Orders List */}
                    <FlatList
                        data={orders}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Card style={styles.card}>
                                <View style={styles.cardContent}>
                                    <View style={styles.header}>
                                        <Text style={styles.orderId}>{item.id}</Text>
                                        <Text style={styles.amount}>{item.amount}</Text>
                                    </View>
                                    <Text style={styles.date}>{item.date}</Text>
                                    <Text style={styles.customer}>{item.customer} • {item.items}</Text>
                                    <View style={styles.statusContainer}>
                                        <Badge style={styles.paidBadge}>Paid</Badge>
                                        <Badge
                                            style={item.fulfilled ? styles.fulfilledBadge : styles.unfulfilledBadge}
                                        >
                                            {item.fulfilled ? 'Fulfilled' : 'Unfulfilled'}
                                        </Badge>
                                    </View>
                                    {item.fulfilled && (
                                        <Text style={styles.tracking}>Tracking added</Text>
                                    )}
                                    <Text style={styles.shipping}>{item.shipping}</Text>
                                </View>
                            </Card>
                        )}
                        style={styles.orderList}
                    />
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    // Header Container
    containerHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 12,
        alignItems: "center",
        backgroundColor:"white",
    },
    order: {
        fontSize: 18,
        color: "black",
        fontWeight:"600"
    },
    actionBox: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: "center",
    },
    drop: {
        backgroundColor: "grey",
        color: "white",
        paddingHorizontal: 8,
        paddingVertical: 7,
        fontSize: 13,
        marginRight: 7,
        borderRadius: 5,
    },
    create: {
        backgroundColor: " #F1F1F2",
        color: "black",
        fontSize: 13,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
    },

    // Main Content Container
    container: {
        // padding: 20,
        margin: 10,
        backgroundColor: '#f5f5f5',
    },

    // Top Filters
    topCont: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "flex-start",
        // padding: 10,
        borderRadius: 8,
        // marginHorizontal: 5,
    },
    topBox: {
        alignItems: "center",
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
    },
    filterItem: {
        fontSize: 14,
        color: "#888",
    },

    // {filter}
    statBoxx: {
        alignItems: "center",
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 10,
        height: 41,
        flexDirection: "row"
    },
    statLabell: {
        paddingHorizontal: 6,
        fontSize: 17,
        width: 30,
        height: 28,
        color: "#888",
    },
    // Statistics Section
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        overflow: "scroll",
    },
    statBox: {
        alignItems: "center",
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5
    },
    statLabel: {
        fontSize: 14,
        color: "#888",
    },
    statValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#888',
    },

    // Order List Styles
    orderList: {
        marginTop: 10,
    },
    card: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    cardContent: {
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderId: {
        fontWeight: 'bold',
    },
    amount: {
        fontWeight: 'bold',
        color: 'green',
    },
    date: {
        color: 'gray',
    },
    customer: {
        marginVertical: 5,
    },
    statusContainer: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    paidBadge: {
        backgroundColor: '#9e9e9e',
        color: 'white',
        marginRight: 10,
        paddingHorizontal: 10,
    },
    fulfilledBadge: {
        backgroundColor: '#4caf50',
        color: 'white',
        paddingHorizontal: 10,
    },
    unfulfilledBadge: {
        backgroundColor: '#ffeb3b',
        color: 'black',
        paddingHorizontal: 10,
    },
    tracking: {
        color: 'gray',
        marginVertical: 5,
    },
    shipping: {
        color: 'gray',
    },

    // sort section

    sortSection: {
        position: "absolute",
        top: 37,
        right: -7,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        zIndex: 29,
        elevation: 2,
    },
    radioCheck: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 5,
        padding: 4,
        margin: 4
    },
    radioOuter: {
        borderRadius: 40,
        width: 15,
        height: 15,
        margin: 5,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "black"
    },
    radioInner: {
        borderRadius: 40,
        width: 10,
        height: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
    },

    // inputs
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: 'black', // Blue outline
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        color: "black"
    },
    saveAsButton: {
        paddingRight:10 ,
        paddingVertical: 8,
  
    },
    saveAsText: {
        color: 'black', // Disabled text color
        fontSize: 16,
    },

});

export { Order };