import React, { useState } from "react";
import { StyleSheet, View, Image, FlatList, TextInput, TouchableOpacity, Text } from "react-native";
import img2 from "../../../../Assets/Icons/ich.jpeg";
import img from "../../../../Assets/Icons/galleryIcon.jpeg";

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
            <View style={Styles.containerHeader}>
                <Text style={Styles.order}>Collections</Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Create Collection")}>
                    <View style={Styles.actionBox}>
                        <Text style={Styles.create}>Create Collection</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* Search Input Section */}

            <View style={Styles.searchContainer}>

                {/* Save as Button (Disabled) */}
                <View style={Styles.saveAsButton}>
                    <Text style={Styles.saveAsText}>Search:</Text>
                </View>
                {/* Search Input */}
                <TextInput
                    style={Styles.searchInput}
                    placeholder="Searching all collections"
                />
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

                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <View>
                            <Image source={img2} style={Styles.statLabell} />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* sort section */}
                {
                    modalVisible && <View style={Styles.sortSection}>
                        <Text>Sort By</Text>
                        {
                            sortBy.map((item, index) => {
                                return (
                                    <TouchableOpacity onPress={() => { setSelectOption(item.title); setModalVisible(false) }}>
                                        <View style={Styles.radioCheck} key={index}>
                                            <View style={Styles.radioOuter} >
                                                <View style={[Styles.radioInner, { backgroundColor: selectOption === item.title ? '#a3e3fa' : "white" }]}></View>
                                            </View>
                                            <Text>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                }

            </View>


            {/* Collection List */}
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate("Collection")}>
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
    create: {
        backgroundColor: "#a3e3fa",
        color: "black",
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
    saveAsButton: {
        paddingRight: 10,
        paddingVertical: 8,
    },
    saveAsText: {
        color: 'black', // Disabled text color
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
        borderColor: "#a3e3fa",
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
        borderColor: "#a3e3fa",
        backgroundColor: "white",
    },
});

export { Collection };