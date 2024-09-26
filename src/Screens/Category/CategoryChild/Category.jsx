import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView,ScrollView } from "react-native";
import { ItemCateStyles   } from "./ItemCateStyle";
import icSort from '../../../Assets/Icons/funnel.png';
import image1 from "../../../Assets/Icons/bin.png";
import img from "../../../Assets/Images/download.jpeg";
import IcEdit from '../../../Assets/Icons/edit.png';
import IcStop from '../../../Assets/Icons/stop.png';
import IcSearch from '../../../Assets/Icons/search.png';

function Category({ handelNav }) {

    const refSort = useRef(null)

    const data = [
        { id: '1', title: 'RBSE & NCERT Books Use In Competition Exam', products: 20, status: true, },
        { id: '2', title: 'Sarthi Publication', products: 24, status: true, },
        { id: '3', title: 'MSC Solved Paper', products: 27, status: false, },
        { id: '4', title: 'VMOU M.A Political', products: 13, status: true, },
        { id: '5', title: 'LLB One Week Series', products: 6, status: false, },
        { id: '6', title: 'RBSE & NCERT Books Use In Competition Exam', products: 20, status: true, },
        { id: '7', title: 'Sarthi Publication', products: 24, status: false, },
        { id: '8', title: 'MSC Solved Paper', products: 27, status: true, },
        { id: '9', title: 'VMOU M.A Political', products: 13, status: true, },
        { id: '10', title: 'LLB One Week Series', products: 6, status: false, },
    ];

    const [modalVisible, setModalVisible] = useState(false);
    const [selectOption, setSelectOption] = useState('');

    const sortBy = [
        { title: "Product Title" },
        { title: "SKU" },
        { title: "Unavailable" },
        { title: "Committed" },
        { title: "Available" },
        { title: "On hand" },
    ];

    return (
        <>
            <TouchableWithoutFeedback onPress={() => { setModalVisible(false) }}>
                <KeyboardAvoidingView>
                    <ScrollView >
                        <View style={ItemCateStyles.maincontainer}>
                            <View style={ItemCateStyles.containerHeader}>
                                <Text style={ItemCateStyles.order}>Category List</Text>
                                <TouchableOpacity onPress={handelNav}>
                                    <View style={ItemCateStyles.actionBox}>
                                        <Text style={ItemCateStyles.create}>Add Category</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/* Search Input Section */}
                            <View style={ItemCateStyles.searchContainer}>
                                {/* <View style={ItemCateStyles .saveAsButton}>
                            <Text style={ItemCateStyles .saveAsText}>Search:</Text>
                        </View> */}
                                <Image source={IcSearch} style={ItemCateStyles.searchIcImg} />
                                <TextInput
                                    style={ItemCateStyles.searchInput}
                                    placeholder="Searching all collections"
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
                                {modalVisible && (
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

                            {/* Filter */}
                            <View style={{ flexDirection: "row", margin: 10,marginBottom:0, zIndex: -1 }}>
                                <View style={ItemCateStyles.statsContainer}>
                                    <View style={ItemCateStyles.statBox}>
                                        <Text style={ItemCateStyles.statLabel}>All</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={ItemCateStyles.statBox}>
                                            <Text style={ItemCateStyles.statLabel}>Active</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={ItemCateStyles.statBox}>
                                            <Text style={ItemCateStyles.statLabel}>Inactive</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={ItemCateStyles.statBox}>
                                            <Image source={image1} style={ItemCateStyles.statedit} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Collection List */}
                            {data.map(item => (
                                <TouchableOpacity key={item.id} style={{ zIndex: -1 }}>
                                    <View style={ItemCateStyles.item}>
                                        <Image source={img} style={{ width: 50, height: 70, marginRight: 10 }} />
                                        <View style={{ width: "85%" }}>
                                            <Text style={ItemCateStyles.title}>{item.title}</Text>

                                            <View style={ItemCateStyles.IcEditContainer}>
                                                <Text style={ItemCateStyles.products}>{item.products} Items</Text>
                                                <View style={ItemCateStyles.editBtnContainer}>
                                                    <TouchableOpacity >
                                                        <Image source={IcEdit} style={ItemCateStyles.editIcon} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity >
                                                        <Image source={IcStop} style={ItemCateStyles.editIcon} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        {item.status ? <Text style={[ItemCateStyles.actionBtn, { backgroundColor: "#d4edda", color: "#155724" }]} >Active</Text> : <Text style={[ItemCateStyles .actionBtn, { backgroundColor: "#721c24", color: "#f8d7da" }]}>Inactive</Text>}
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>
    );
}

// const ItemCateStyles = StyleSheet.create({
//     maincontainer: {
//         backgroundColor: "white"

//     },
//     // Header Container
//     containerHeader: {
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         padding: 10,
//         alignItems: "center",
//         // borderBottomColor: "#BBBBBB",
//         // borderBottomWidth: 1,
//         marginHorizontal: 10
//     },
//     order: {
//         fontSize: 17,
//         color: "black",
//         fontWeight: "600"
//     },
//     actionBox: {
//         justifyContent: 'space-evenly',
//         flexDirection: 'row',
//         alignItems: "center",
//     },
//     create: {
//         backgroundColor: "black",
//         color: "white",
//         fontSize: 15,
//         paddingHorizontal: 12,
//         paddingVertical: 9,
//         borderRadius: 5,
//     },
//     // input..
//     searchContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 5,
//         marginHorizontal: 10,
//         borderRadius: 20,
//         backgroundColor: "#FFF",
//         elevation: 2,
//     },
//     searchIcImg: {
//         width: 20,
//         height: 20,
//         marginLeft: 10,
//     },
//     searchInput: {
//         // elevation: 3,
//         border: "none",
//         padding: 10,
//         color: 'black',
//         // backgroundColor: "#FFF",
//         flex: 2,
//         height: 40,
//         fontSize: 16,
//         // paddingHorizontal: 10,
//         marginHorizontal: 5,
//     },
//     saveAsButton: {
//         paddingRight: 5,
//         paddingVertical: 8,
//     },
//     saveAsText: {
//         color: 'black', // Disabled text color
//         fontSize: 16,
//     },
//     // Statistics Section
//     statsContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 20,
//         overflow: "scroll",
//         alignItems:"center",
//     },
//     statBox: {
//         alignItems: "center",
//         backgroundColor: '#FFF',
//         elevation:2,
//         padding: 10,
//         borderRadius: 8,
//         marginHorizontal: 5,
//         marginVertical:1.2
//     },
//     statLabel: {
//         fontSize: 14,
//         textAlign: "center",
//         // width: 30,
//         color: "black",
//         fontWeight: "500"
//     },
//     sortBox: {
//         marginHorizontal: 7,
//         height: 41,
//         flexDirection: "row",
//         alignItems: "center",
//     },
//     statBoxx: {
//         alignItems: "center",
//         backgroundColor: '#F0F0F0',
//         padding: 10,
//         borderRadius: 8,
//         marginHorizontal: 7,
//         height: 41,
//         flexDirection: "row"
//     },
//     statedit: {
//         // paddingHorizontal: 6,
//         backgroundColor: "#FFFFFF",
//         width: 20,
//         height: 20,
//     },
//     statLabell: {
//         paddingHorizontal: 6,
//         fontSize: 17,
//         width: 30,
//         height: 28,
//         color: "#888",
//     },
//     // Collection List Item
//     item: {
//         backgroundColor: "white",
//         padding: 16,
//         marginVertical: 8,
//         borderRadius: 8,
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//         shadowOffset: { width: 0, height: 2 },
//         elevation: 3,
//         flexDirection: "row",
//         margin: 12,
//         alignItems: "center",
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         width: 250,
//         color: "black"
//     },
//     products: {
//         fontSize: 14,
//         color: '#777',
//     },
//     // sort section 
//     sortSection: {
//         position: "absolute",
//         top: 37,
//         right: -7,
//         borderRadius: 10,
//         backgroundColor: "white",
//         padding: 10,
//         margin: 10,
//         zIndex: 30,
//         elevation: 2,
//     },
//     radioCheck: {
//         flexDirection: "row",
//         alignItems: "center",
//         marginLeft: 5,
//         padding: 4,
//         margin: 4
//     },
//     radioOuter: {
//         borderRadius: 40,
//         width: 15,
//         height: 15,
//         margin: 5,
//         borderWidth: 1,
//         borderColor: "black",
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     radioInner: {
//         borderRadius: 40,
//         width: 10,
//         height: 10,
//         margin: 5,
//         borderWidth: 1,
//         borderColor: "black",
//         backgroundColor: "white",
//     },
//     editIcon: {
//         width: 20,
//         height: 20,
//         marginHorizontal: 5,
//         marginTop: 5,
//         justifyContent: "center",
//         overflow: "visible"
//     },
//     IcEditContainer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center"
//     },
//     editBtnContainer: {
//         flexDirection: "row",
//         marginHorizontal: 5,
//         marginTop: 5,
//         alignItems: "center",
//     },
//     actionBtn: {
//         margin: 3,
//         fontWeight: "600",
//         padding: 4,
//         borderRadius: 10,
//         width: 60,
//         textAlign: "center",
//         marginTop: 5,
//     }
// });

export { Category }
