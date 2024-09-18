import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import img from "../../../Assets/Icons/option.png";
import img1 from "../../../Assets/Icons/close.png";
import img2 from "../../../Assets/Icons/galleryIcon.jpeg";

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
function CollectionDetail() {
    const [title, setTitle] = useState('Rajasthan G.K.');

    return (
        <>
            {/* Header Section */}
            <View style={Styles.containerHeader}>
                <Text style={Styles.order}>Rajasthan G.K.</Text>
                <View style={Styles.actionBox}>
                    <Image style={Styles.create} source={img} />
                </View>
            </View>

            {/* Title Input Section */}
            <View style={Styles.inputContainer}>
                <TextInput
                    style={Styles.titleInput}
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Enter title"
                />

                <View>
                    <Text>Description.......</Text>
                </View>
            </View>
            <View >
                <Text style={{ fontSize: 25, paddingLeft: 11, }}>Product</Text>
                <View style={Styles.searchContainer}>
                    {/* Search Input */}
                    <TextInput
                        style={Styles.searchInput}
                        placeholder="Searching all collections"
                    />

                    {/* Cancel Button */}
                    <TouchableOpacity style={{ alignContent: "center", alignItems: "center" }} >
                        <Text style={Styles.cancelText}>Browser</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.searchContainer}>
                    {/* Search Input */}
                    <TextInput
                        style={Styles.searchInput}
                        placeholder="Short:Best Selling"
                    />
                </View>
            </View>

            {/* Collection List */}
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity >
                        <View style={Styles.item}>
                            <Image source={img2} style={{ width: 24, height: 25, marginRight: 10 }} />
                            <View style={{ flexDirection: "row" }}>
                                <View>
                                    <Text style={Styles.title}>{item.title}</Text>
                                    <Text style={Styles.products}>{item.products}</Text>
                                </View>
                                <Image source={img1} style={{ width: 24, height: 25, marginRight: 10 }} />
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
        alignItems: "center",
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 10,
        height: 41,
        flexDirection: "row",
    },
    create: {
        borderRadius: 5,
        width: 30,
        height: 28,
    },

    // Input Container
    inputContainer: {
        paddingHorizontal: 10,
        marginVertical: 10,
    },

    // Title Input
    titleInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 18,
        color: 'black',
    },
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
    },
    cancelText: {
        color: 'Black',
        height: 40,
        borderColor: 'black', // Blue outline
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 17,
        padding: 7,
        fontSize: 16,
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

export { CollectionDetail };

