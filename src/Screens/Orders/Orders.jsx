import React from "react";
import { ScrollView, Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { Card, Badge } from 'react-native-paper';
import imgg from '../../Assets/Icons/ich.jpeg';
import img2 from '../../Assets/Icons/orderIc.jpeg';


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
                        <View style={styles.statBoxx}>
                            <View >
                                
                                <Image source={imgg} style={styles.statLabell}/>
                            </View>
                            <View >
                            <Image source={img2} style={styles.statLabell}/>
                            
                            </View>
                        </View>

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
        padding: 10,
        alignItems: "center",
    },
    order: {
        fontSize: 20,
        color: "black",
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
        backgroundColor: "black",
        color: "white",
        fontSize: 13,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
    },

    // Main Content Container
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
    },

    // Top Filters
    topCont: {
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
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
        width:30,
        height:28,
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
});

export { Order };