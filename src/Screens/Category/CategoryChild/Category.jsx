import React, { useState } from "react";
import { StyleSheet, View, Text, Image, FlatList, TextInput, TouchableOpacity } from "react-native";
import img1 from "../../../Assets/Icons/orderIc.jpeg";
import img2 from "../../../Assets/Icons/ich.jpeg";
import img from "../../../Assets/Icons/galleryIcon.jpeg";
import IcEdit from '../../../Assets/Icons/edit.png';
import IcStop from '../../../Assets/Icons/stop.png';

function Category({handelNav}) {


    const data = [
        { id: '1', title: 'RBSE & NCERT Books Use In Competition Exam', products: 20 },
        { id: '2', title: 'Sarthi Publication', products: 24 },
        { id: '3', title: 'MSC Solved Paper', products: 27 },
        { id: '4', title: 'VMOU M.A Political', products: 13 },
        { id: '5', title: 'LLB One Week Series', products: 6 },
        { id: '6', title: 'RBSE & NCERT Books Use In Competition Exam', products: 20 },
        { id: '7', title: 'Sarthi Publication', products: 24 },
        { id: '8', title: 'MSC Solved Paper', products: 27 },
        { id: '9', title: 'VMOU M.A Political', products: 13 },
        { id: '10', title: 'LLB One Week Series', products: 6 },
    ];



    const [searchText, setSearchText] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false); // State to control search input visibility

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
                <Text style={Styles.order}>Category List</Text>
                <TouchableOpacity onPress={handelNav}>
                    <View style={Styles.actionBox}>
                        <Text style={Styles.create}>Add Category</Text>
                    </View>
                </TouchableOpacity>
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
                    <TouchableOpacity onPress={() => setIsSearchVisible(true)}>
                        <Image source={img1} style={Styles.statLabell} />
                    </TouchableOpacity>
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
                                                <View style={[Styles.radioInner, { backgroundColor: selectOption === item.title ? '#75AAF0' : "white" }]}></View>
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
                    <TouchableOpacity>
                        <View style={Styles.item}>
                            <Image source={img} style={{ width: 24, height: 25, marginRight: 10 }} />
                            <View>
                                <Text style={Styles.title}>{item.title}</Text>
                                <Text style={Styles.products}>{item.products} Items</Text>
                                <View style={Styles.IcEditContainer}>
                                    <TouchableOpacity style={Styles.editBtnContainer}>
                                        <Image source={IcEdit} style={Styles.editIcon} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={Styles.editBtnContainer}>
                                        <Image source={IcStop} style={Styles.editIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                )}
                style={Styles.list}
            />

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
        color: "black"
    },
    cancelText: {
        color: '#007AFF',
        marginLeft: 10,
        fontSize: 16,
    },
    saveAsButton: {
        backgroundColor: '#a3e3fa', // Gray background (disabled)
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginLeft: 10,
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
        color: "black"
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

    // icons 
    editBtnContainer: {
        width: 30,
    },
    editIcon: {
        width: 15,
        height: 20,
        marginHorizontal: 5,
        marginTop: 5,
        justifyContent: "center",
        overflow: "visible"
    },
    IcEditContainer: {
        flexDirection: "row",
    }
});

export { Category }