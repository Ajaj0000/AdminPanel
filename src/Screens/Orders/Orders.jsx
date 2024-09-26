import React, { useRef, useState } from "react";
import { ScrollView, Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { Card, Badge } from 'react-native-paper';
import imgg from '../../Assets/Icons/ich.jpeg';
import IcSearch from '../../Assets/Icons/search.png';
import icSort from '../../Assets/Icons/funnel.png';
import { ItemCateStyles } from "../Category/CategoryChild/ItemCateStyle";


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
        id: '#14450024-25',
        date: 'Sunday at 12:40 pm',
        customer: 'Bhawna Choudhary',
        items: '4 items',
        status: 'Fulfilled',
        amount: '₹1,190.00',
        shipping: 'Standard',
        fulfilled: true,
    },
    {
        id: '#14451024-25',
        date: 'Sunday at 12:40 pm',
        customer: 'Bhawna Choudhary',
        items: '4 items',
        status: 'Fulfilled',
        amount: '₹1,190.00',
        shipping: 'Standard',
        fulfilled: true,
    },
    {
        id: '#14452024-25',
        date: 'Sunday at 12:40 pm',
        customer: 'Bhawna Choudhary',
        items: '4 items',
        status: 'Fulfilled',
        amount: '₹1,190.00',
        shipping: 'Standard',
        fulfilled: true,
    },
    {
        id: '#14453024-25',
        date: 'Sunday at 12:40 pm',
        customer: 'Bhawna Choudhary',
        items: '4 items',
        status: 'Fulfilled',
        amount: '₹1,190.00',
        shipping: 'Standard',
        fulfilled: true,
    },
    {
        id: '#14454024-25',
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

    const refSort = useRef(null)

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
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                <KeyboardAvoidingView>
                    <View style={ItemCateStyles.maincontainer}>
                        <View style={ItemCateStyles.containerHeader}>
                            <Text style={ItemCateStyles.order}>Orders</Text>
                            <View style={styles.actionBox}>
                                <Text style={styles.drop}>More Action</Text>
                                <Text style={styles.create}>Create order</Text>
                            </View>
                        </View>
                        <ScrollView>
                            {/* Search Input Section */}

                            <View style={ItemCateStyles.searchContainer}>
                                <Image source={IcSearch} style={ItemCateStyles.searchIcImg} />
                                <TextInput
                                    style={ItemCateStyles.searchInput}
                                    placeholder="Search..."
                                    placeholderTextColor="grey"
                                />
                                <View style={ItemCateStyles.sortBox}>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        <View>
                                            <Image source={icSort} style={ItemCateStyles.statLabell} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* sort section */}
                                {
                                    modalVisible && (
                                        <TouchableWithoutFeedback onPress={() => { }}>
                                            <View style={ItemCateStyles.sortSection} ref={refSort}>
                                                <Text>Sort By</Text>
                                                {sortBy.map((item, index) => (
                                                    <TouchableOpacity key={index} onPress={() => { setSelectOption(item.title); setModalVisible(false); }}>
                                                        <View style={ItemCateStyles.radioCheck}>
                                                            <View style={ItemCateStyles.radioOuter}>
                                                                <View style={[ItemCateStyles.radioInner, { backgroundColor: selectOption === item.title ? 'black' : 'white' }]}></View>
                                                            </View>
                                                            <Text style={{ color: "black" }}>{item.title}</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        </TouchableWithoutFeedback>
                                    )}
                            </View>

                            <View style={styles.container}>
                                {/* Time Filters */}
                                <View style={styles.topCont}>
                                    <View style={ItemCateStyles.statBox}>
                                        <Text style={styles.filterItem}>Today</Text>
                                    </View>
                                    <View style={ItemCateStyles.statBox}>
                                        <Text style={styles.filterItem}>7 days</Text>
                                    </View>
                                    <View style={ItemCateStyles.statBox}>
                                        <Text style={styles.filterItem}>30 days</Text>
                                    </View>
                                </View>

                                {/* Statistics */}
                                <ScrollView horizontal={true}>
                                    <View style={ItemCateStyles.statsContainer}>
                                        <View style={ItemCateStyles.statBox}>
                                            <Text style={ItemCateStyles.statLabel}>Total Orders</Text>
                                            <Text style={styles.statValue}>0 --</Text>
                                        </View>
                                        <View style={ItemCateStyles.statBox}>
                                            <Text style={ItemCateStyles.statLabel}>Ordered items over time</Text>
                                            <Text style={styles.statValue}>0 --</Text>
                                        </View>
                                        <View style={ItemCateStyles.statBox}>
                                            <Text style={ItemCateStyles.statLabel}>Returns</Text>
                                            <Text style={styles.statValue}>0 --</Text>
                                        </View>
                                        <View style={ItemCateStyles.statBox}>
                                            <Text style={ItemCateStyles.statLabel}>Fulfilled orders over time</Text>
                                            <Text style={styles.statValue}>0 --</Text>
                                        </View>
                                        <View style={ItemCateStyles.statBox}>
                                            <Text style={ItemCateStyles.statLabel}>Delivered orders over time</Text>
                                            <Text style={styles.statValue}>0 --</Text>
                                        </View>
                                        <View style={ItemCateStyles.statBox}>
                                            <Text style={ItemCateStyles.statLabel}>Time to fulfill</Text>
                                            <Text style={styles.statValue}>0 min</Text>
                                        </View>
                                    </View>
                                </ScrollView>

                                {/* Filter */}
                                <View style={{ flexDirection: "row", }}>
                                    <ScrollView horizontal={true}>
                                        <View style={ItemCateStyles.statsContainer}>
                                            <View style={ItemCateStyles.statBox}>
                                                <Text style={ItemCateStyles.statLabel}>All</Text>
                                            </View>
                                            <View style={ItemCateStyles.statBox}>
                                                <Text style={ItemCateStyles.statLabel}>Unfulfilled</Text>

                                            </View>
                                            <View style={ItemCateStyles.statBox}>
                                                <Text style={ItemCateStyles.statLabel}>Unpaid</Text>

                                            </View>
                                            <View style={ItemCateStyles.statBox}>
                                                <Text style={ItemCateStyles.statLabel}>Open</Text>

                                            </View>
                                            <View style={ItemCateStyles.statBox}>
                                                <Text style={ItemCateStyles.statLabel}>Archived</Text>

                                            </View>
                                            <View style={ItemCateStyles.statBox}>
                                                <Text style={ItemCateStyles.statLabel}>+</Text>

                                            </View>
                                        </View>
                                    </ScrollView>

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

                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>


        </>
    );
}

const styles = StyleSheet.create({
    maincontanier: {
        backgroundColor: "white"
    },
    // Header Container
    containerHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        alignItems: "center",
        backgroundColor: "white",
        marginHorizontal: 10,
    },
    order: {
        fontSize: 18,
        color: "black",
        fontWeight: "600"
    },
    actionBox: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: "center",
    },
    drop: {
        backgroundColor: "black",
        color: "white",
        paddingHorizontal: 8,
        paddingVertical: 7,
        fontSize: 13,
        marginRight: 7,
        borderRadius: 5,
    },
    create: {
        backgroundColor: "#F0F0F0",
        color: "black",
        fontSize: 13,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
    },

    // Main Content Container
    container: {
        margin: 10,
        backgroundColor: 'white',
        zIndex: -1,
    },

    // Top Filters
    topCont: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "flex-start",
        borderRadius: 8,
        marginTop: 10,
    },
    topBox: {
        alignItems: "center",
        backgroundColor: '#F0F0F0',
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
        backgroundColor: "#F0F0F0",
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
        alignItems: "center",
    },
    statBox: {
        alignItems: "center",
        backgroundColor: '#FFF',
        elevation: 2,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
        marginVertical: 1.2
    },
    statLabel: {
        fontSize: 14,
        textAlign: "center",
        // width: 30,
        color: "black",
        fontWeight: "500"
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
        margin: 4,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
    },
    cardContent: {
        flexDirection: 'column',
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderId: {
        fontWeight: 'bold',
        color: "black"
    },
    amount: {
        fontWeight: 'bold',
        color: 'green',
    },
    date: {
        color: 'gray',
    },
    customer: {
        color: "black",
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
        padding: 5,
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "#FFF",
        elevation: 2,
    },
    searchIcImg: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    searchInput: {
        // elevation: 3,
        border: "none",
        padding: 10,
        color: 'black',
        // backgroundColor: "#FFF",
        flex: 2,
        height: 40,
        fontSize: 16,
        // paddingHorizontal: 10,
        marginHorizontal: 5,
    },
    sortBox: {
        marginHorizontal: 7,
        height: 41,
        flexDirection: "row",
        alignItems: "center",
    },
    statBoxx: {
        alignItems: "center",
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 7,
        height: 41,
        flexDirection: "row"
    },
    // saveAsButton: {
    //     paddingRight: 5,
    //     paddingVertical: 8,

    // },
    saveAsText: {
        color: 'black', // Disabled text color
        fontSize: 16,
    },

});

export { Order };