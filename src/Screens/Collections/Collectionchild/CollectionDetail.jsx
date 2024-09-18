import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import img from "../../../Assets/Icons/option.png";
import { styles } from "../../Admins/LoginStyle";

function CollectionDetail() {
    const [title, setTitle] = useState('Rajasthan G.K.');
    const [metaDescription, setMetaDescription] = useState('');
    const [urlHandle, setUrlHandle] = useState('https://thebooks24.com/collections/rajasthan-g-k');
    const [products, setProducts] = useState([
        { id: '1', name: 'Parth Rajasthan Adhyayan Class 6-10 (English Medium)', status: 'Active' },
        { id: '2', name: 'Moomal Rajasthan 7001 Objective Questions (English Medium)', status: 'Active' },
        { id: '3', name: 'Rbd Gk Guru Subhash Charan Rajasthan Ka Itihaas (Hastlikhit Notes)', status: 'Active' },
        { id: '4', name: 'RBD Rajasthan ki Kala Sanskriti (Hastlikhite Notes)', status: 'Active' },
        { id: '5', name: 'Rbd Gk Guru Subhash Charan Rajasthan Ka Bhugol (Hastlikhit Notes)', status: 'Active' },
        { id: '6', name: 'Rath Rajasthan Manchitrawali & Samanya Gyan By Dr Mukesh Pancholi', status: 'Active' },
        { id: '7', name: 'Utkarsh Rajasthan Jila Darshan By Narendra Choudhary Sir', status: 'Active' },
        { id: '8', name: 'Rai Marudhara Practice Workbook By Gaurav Budania', status: 'Active' },
        { id: '9', name: 'Mumal india current gk 2023-24', status: 'Draft' },
    ]);

    const deleteItem = (id) => {
        setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
    };
    const [imageUri, setImageUri] = useState(null);

    const handleImageUpload = () => {
        // Placeholder function for image upload, replace with real functionality
        alert('Image upload functionality is not implemented.');
    };
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
                <TouchableOpacity onPress={() => deleteItem(item.id)} style={Styles.deleteButton}>
                    <Text style={Styles.deleteText}>✕</Text>
                </TouchableOpacity>
            </View>
        ));
    };

    return (
        <ScrollView>
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

            {/* Search Section */}
            <View>
                <Text style={Styles.sectionTitle}>Product</Text>
                <View style={Styles.searchContainer}>
                    {/* Search Input */}
                    <TextInput
                        style={Styles.searchInput}
                        placeholder="Searching all collections"
                    />

                    {/* Browse Button */}
                    <TouchableOpacity style={Styles.browseButton}>
                        <Text style={Styles.cancelText}>Browse</Text>
                    </TouchableOpacity>
                </View>

                {/* Sort Input */}
                <View style={Styles.searchContainer}>
                    <TextInput
                        style={Styles.searchInput}
                        placeholder="Sort: Best Selling"
                    />
                </View>
            </View>

            {/* Product List Section (using map instead of FlatList) */}
            {renderProducts()}

            {/* Search Engine Listing Section */}
            <View style={Styles.searchEngineContainer}>
                <Text style={Styles.header}>Search engine listing</Text>
                <Text style={Styles.subHeader}>
                    Add a description to see how this collection might appear in a search engine listing
                </Text>

                {/* Page Title Input */}
                <View style={Styles.inputGroup}>
                    <Text style={Styles.label}>Page title</Text>
                    <TextInput
                        style={Styles.input}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Text style={Styles.charCount}>{title.length} of 70 characters used</Text>
                </View>

                {/* Meta Description Input */}
                <View style={Styles.inputGroup}>
                    <Text style={Styles.label}>Meta description</Text>
                    <TextInput
                        style={Styles.input}
                        value={metaDescription}
                        onChangeText={setMetaDescription}
                        placeholder="Add a meta description"
                        multiline={true}
                        maxLength={320}
                    />
                    <Text style={Styles.charCount}>{metaDescription.length} of 320 characters used</Text>
                </View>

                {/* URL Handle Input */}
                <View style={Styles.inputGroup}>
                    <Text style={Styles.label}>URL handle</Text>
                    <TextInput
                        style={Styles.input}
                        value={urlHandle}
                        onChangeText={setUrlHandle}
                    />
                </View>
            </View>
            <View style={styles.container}>
            <Text style={styles.labell}>Image</Text>
            <TouchableOpacity style={styles.uploadBox} onPress={handleImageUpload}>
                <Text style={styles.addImageText}>Add image</Text>
                <Text style={styles.dropText}>or drop an image to upload</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
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

    // Search Section
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    browseButton: {
        marginLeft: 10,
    },
    cancelText: {
        color: 'black',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 7,
        fontSize: 16,
    },

    // Product List Section
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
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
    },
    deleteText: {
        color: '#ff0000',
        fontSize: 18,
    },

    // Section Title
    sectionTitle: {
        fontSize: 25,
        paddingLeft: 11,
    },

    // Search Engine Listing
    searchEngineContainer: {
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
    },
    subHeader: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        color: '#000',
        backgroundColor: '#f9f9f9',
    },
    charCount: {
        fontSize: 12,
        color: '#999',
        marginTop: 5,
    },
    container: {
        padding: 20,
        alignItems: 'center',
    },
    labell: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    uploadBox: {
        width: 300,
        height: 150,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
    },
    addImageText: {
        fontSize: 16,
        color: '#007bff',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    dropText: {
        fontSize: 12,
        color: '#666',
    },
});

export { CollectionDetail };

