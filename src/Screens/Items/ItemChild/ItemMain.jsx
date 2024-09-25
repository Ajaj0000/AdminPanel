import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import IcEdit from '../../../Assets/Icons/edit.png';
import IcStop from '../../../Assets/Icons/stop.png';
import img2 from "../../../Assets/Icons/ich.jpeg";
import { ScrollView } from "react-native-gesture-handler";

function ItemMain({ handle }) {
    const [products, setProducts] = useState([
        { id: '1', name: 'Parth Rajasthan Adhyayan Class 6-10 (English Medium)', status: 'Active' },
        { id: '2', name: 'Moomal Rajasthan 7001 Objective Questions (English Medium)', status: 'Draft' },
        { id: '3', name: 'Rbd Gk Guru Subhash Charan Rajasthan Ka Itihaas (Hastlikhit Notes)', status: 'Active' },
        { id: '4', name: 'RBD Rajasthan ki Kala Sanskriti (Hastlikhite Notes)', status: 'Active' },
        { id: '5', name: 'Rbd Gk Guru Subhash Charan Rajasthan Ka Bhugol (Hastlikhit Notes)', status: 'Draft' },
        { id: '6', name: 'Rath Rajasthan Manchitrawali & Samanya Gyan By Dr Mukesh Pancholi', status: 'Draft' },
        { id: '7', name: 'Utkarsh Rajasthan Jila Darshan By Narendra Choudhary Sir', status: 'Active' },
        { id: '8', name: 'Rai Marudhara Practice Workbook By Gaurav Budania', status: 'Active' },
        { id: '9', name: 'Mumal india current gk 2023-24', status: 'Draft' },
        { id: '10', name: 'Parth Rajasthan Adhyayan Class 6-10 (English Medium)', status: 'Active' },
        { id: '11', name: 'Moomal Rajasthan 7001 Objective Questions (English Medium)', status: 'Active' },
        { id: '12', name: 'Rbd Gk Guru Subhash Charan Rajasthan Ka Itihaas (Hastlikhit Notes)', status: 'Draft' },
    ]);

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


    const renderProducts = () => {
        return products.map((item, index) => (
            <View key={item.id} style={Styles.itemContainer}>
                <Text style={Styles.index}>{index + 1}.</Text>
                <View style={Styles.productDetails}>
                    <Text style={Styles.productName}>{item.name}</Text>
                </View>
                <View style={Styles.statusContainer}>
                    <Text style={item.status === 'Active' ? Styles.activeStatus : Styles.draftStatus}>
                        {item.status}
                    </Text>
                </View>
                <Text style={Styles.deleteButton}>
                    <TouchableOpacity >
                        <Image source={IcEdit} style={Styles.editIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image source={IcStop} style={Styles.editIcon} />
                    </TouchableOpacity>
                </Text>
            </View>
        ));
    };


    return (
        <>
            <ScrollView>
                <View style={Styles.containerHeader}>
                    <Text style={Styles.order}>Item</Text>
                    <TouchableOpacity onPress={handle}>
                        <View style={Styles.actionBox}>
                            <Text style={Styles.create} >Add Item</Text>
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
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
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
                                                    <View style={[Styles.radioInner, { backgroundColor: selectOption === item.title ? 'black' : "white" }]}></View>
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

                {/* Product  */}
                {renderProducts()}
            </ScrollView>
        </>
    )
}
const Styles = StyleSheet.create({
    // Header Container
    containerHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        alignItems: "center",
        borderBottomColor: "#BBBBBB",
        borderBottomWidth: 1,
        marginHorizontal: 10
    },
    order: {
        fontSize: 17,
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
    // input..
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
        paddingRight: 10,
        paddingVertical: 8,
    },
    saveAsText: {
        color: 'black', // Disabled text color
        fontSize: 16,
    },
    // Product List Section
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginLeft: 17,
        padding: 7,
        fontSize: 16,
    },
    // List of collections
    list: {
        padding: 16,
    },
    index: {
        width: 30,
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
    },
    productDetails: {
        flex: 1,
        paddingHorizontal: 8,
    },
    productName: {
        fontSize: 16,
        color: '#000',
    },
    statusContainer: {
        width: 60,
        alignItems: 'center',
    },
    activeStatus: {
        color: '#28a745',
        fontWeight: 'bold',
        backgroundColor: '#d4edda',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    draftStatus: {
        color: '#007bff',
        fontWeight: 'bold',
        backgroundColor: '#cce5ff',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    deleteButton: {
        padding: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    deleteText: {
        fontSize: 18,
    },
    editIcon: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
        marginTop: 5,
        justifyContent: "center",
        overflow: "visible"
    },
})
export { ItemMain }