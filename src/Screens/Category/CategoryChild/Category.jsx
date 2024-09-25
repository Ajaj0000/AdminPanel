import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import img2 from "../../../Assets/Icons/ich.jpeg";
import image1 from "../../../Assets/Icons/bin.png";
import img from "../../../Assets/Images/download.jpeg";
import IcEdit from '../../../Assets/Icons/edit.png';
import IcStop from '../../../Assets/Icons/stop.png';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "../../Admins/LoginStyle";

function Category({ handelNav }) {

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
            <ScrollView >
                <View style={Styles.maincontainer}>
                    <View style={Styles.containerHeader}>
                        <Text style={Styles.order}>Category List</Text>
                        <TouchableOpacity onPress={handelNav}>
                            <View style={Styles.actionBox}>
                                <Text style={Styles.create}>Add Category</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Search Input Section */}
                    <View style={Styles.searchContainer}>
                        <View style={Styles.saveAsButton}>
                            <Text style={Styles.saveAsText}>Search:</Text>
                        </View>
                        <TextInput
                            style={Styles.searchInput}
                            placeholder="Searching all collections"
                            placeholderTextColor="grey"
                        />
                    </View>

                    {/* Filter */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                        <View style={Styles.statsContainer}>
                            <View style={Styles.statBox}>
                                <Text style={Styles.statLabel}>All</Text>
                            </View>
                            <TouchableOpacity>
                                <View style={Styles.statactive}>
                                    <Text style={Styles.statLabelactive}>Active</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={Styles.statactive}>
                                    <Text style={Styles.statLabelactive}>Inactive</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={Styles.statBoxx}>
                                <TouchableOpacity>
                                    <View style={{ backgroundColor: "#F0F0F0" }}>
                                        <Image source={image1} style={Styles.statedit} />
                                    </View>
                                </TouchableOpacity>
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
                        {modalVisible && (
                            <View style={Styles.sortSection}>
                                <Text>Sort By</Text>
                                {sortBy.map((item, index) => (
                                    <TouchableOpacity key={index} onPress={() => { setSelectOption(item.title); setModalVisible(false); }}>
                                        <View style={Styles.radioCheck}>
                                            <View style={Styles.radioOuter}>
                                                <View style={[Styles.radioInner, { backgroundColor: selectOption === item.title ? 'black' : 'white' }]}></View>
                                            </View>
                                            <Text style={{ color: "black" }}>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>

                    {/* Collection List */}
                    {data.map(item => (
                        <TouchableOpacity key={item.id}>
                            <View style={Styles.item}>
                                <Image source={img} style={{ width: 50, height: 70, marginRight: 10 }} />
                                <View>
                                    <Text style={Styles.title}>{item.title}</Text>

                                    <View style={Styles.IcEditContainer}>
                                        <Text style={Styles.products}>{item.products} Items</Text>
                                        <View style={Styles.editBtnContainer}>
                                            <TouchableOpacity >
                                                <Image source={IcEdit} style={Styles.editIcon} />
                                            </TouchableOpacity>
                                            <TouchableOpacity >
                                                <Image source={IcStop} style={Styles.editIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

        </>
    );
}

const Styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "white"

    },
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
    // input..
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    searchInput: {
        elevation: 3,
        borderColor: 'black',
        borderRadius: 6,
        padding: 10,
        color: 'grey',
        backgroundColor: "#F0F0F0",
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    saveAsButton: {
        paddingRight: 5,
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
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5
    },
    statactive: {
        alignItems: "center",
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 3
    },
    statLabelactive: {
        fontSize: 14,
        textAlign: "center",
        width: 60,
        color: "#888",
    },
    statLabel: {
        fontSize: 14,
        textAlign: "center",
        width: 30,
        color: "#888",
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
    statedit: {
        paddingHorizontal: 6,
        backgroundColor: "#F0F0F0",
        width: 25,
        height: 25,
    },
    statLabell: {
        paddingHorizontal: 6,
        fontSize: 17,
        width: 30,
        height: 28,
        color: "#888",
    },
    // Collection List Item
    item: {
        backgroundColor: "white",
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        flexDirection: "row",
        margin: 12,
        alignItems: "center"
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        width:250,
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
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
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
    editIcon: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
        marginTop: 5,
        justifyContent: "center",
        overflow: "visible"
    },
    IcEditContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    editBtnContainer: {
        flexDirection:"row",
        marginHorizontal: 5,
        marginTop: 5,
    }
});

export { Category }
