import React, { useState } from "react";
import { StyleSheet, View, Image, FlatList, TextInput, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import img1 from "../../../Assets/Icons/orderIc.jpeg";
import img2 from "../../../Assets/Icons/ich.jpeg";
import img from "../../../Assets/Icons/galleryIcon.jpeg";

// Example Data for Collections
const data = [
    { id: '1', title: 'RBSE & NCERT Books Use In Competition Exam', products: '20 products' },
    { id: '2', title: 'Sarthi Publication', products: '24 products' },
    { id: '3', title: 'MSC Solved Paper', products: '27 products' },
    { id: '4', title: 'VMOU M.A Political', products: '13 products' },
    { id: '5', title: 'LLB One Week Series', products: '6 products' },
    { id: '6', title: 'RBSE & NCERT Books Use In Competition Exam', products: '20 products' },
    { id: '7', title: 'Sarthi Publication', products: '24 products' },
    { id: '8', title: 'MSC Solved Paper', products: '27 products' },
    { id: '9', title: 'VMOU M.A Political', products: '13 products' },
    { id: '10', title: 'LLB One Week Series', products: '6 products' },
];

function Collection(props) {
    const [searchText, setSearchText] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false); // State to control search input visibility

    return (
        <>
            <View style={Styles.containerHeader}>
                <Text style={Styles.order}>Collections</Text>
                <View style={Styles.actionBox}>
                    <Text style={Styles.create}>Create Collection</Text>
                </View>
            </View>

            {/* Filter */}
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={Styles.statsContainer}>
                    <View style={Styles.statBox}>
                        <Text style={Styles.statLabel}>All</Text>
                    </View>
                    <View style={Styles.statBox}>
                        <Text style={Styles.statLabel}>+</Text>
                    </View>
                </View>

                <View style={Styles.statBoxx}>
                    <TouchableOpacity onPress={() => setIsSearchVisible(true)}>
                        <Image source={img1} style={Styles.statLabell} />
                    </TouchableOpacity>
                    <View>
                        <Image source={img2} style={Styles.statLabell} />
                    </View>
                </View>
            </View>

            {/* Search Input Section */}
            {isSearchVisible && (
                <View style={Styles.searchContainer}>
                    {/* Search Input */}
                    <TextInput
                        style={Styles.searchInput}
                        placeholder="Searching all collections"
                        value={searchText}
                        onChangeText={setSearchText}
                    />

                    {/* Cancel Button */}
                    <TouchableOpacity onPress={() => setIsSearchVisible(false)}>
                        <Text style={Styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>

                    {/* Save as Button (Disabled) */}
                    <View style={Styles.saveAsButton}>
                        <Text style={Styles.saveAsText}>Save as</Text>
                    </View>
                </View>
            )}

            {/* Collection List */}
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate("CollectionDetail")}>
                        <View style={Styles.item}>
                            <Image source={img} style={{ width: 24, height: 25, marginRight: 10 }} />
                            <View>
                                <Text style={Styles.title}>{item.title}</Text>
                                <Text style={Styles.products}>{item.products}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                )}
                style={Styles.list}
            />
        </>
    );
}

const Styles = StyleSheet.create({
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
    create: {
        backgroundColor: "black",
        color: "white",
        fontSize: 15,
        paddingHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 5,
    },
    // input..
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: '#007AFF', // Blue outline
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    cancelText: {
        color: '#007AFF',
        marginLeft: 10,
        fontSize: 16,
    },
    saveAsButton: {
        backgroundColor: '#F0F0F0', // Gray background (disabled)
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginLeft: 10,
    },
    saveAsText: {
        color: '#A9A9A9', // Disabled text color
        fontSize: 16,
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
        fontSize: 16,
        textAlign: "center",
        width: 30,
        color: "#888",
    },
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
    // List of collections
    list: {
        padding: 16,
    },
    item: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 1,
        flexDirection: "row",
        margin: 3,
        alignItems: "center"
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    products: {
        fontSize: 14,
        color: '#777',
    },
});

export { Collection };