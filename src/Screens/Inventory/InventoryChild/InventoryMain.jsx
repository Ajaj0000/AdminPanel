import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Modal, Pressable } from 'react-native';
import img2 from '../../../Assets/Icons/ich.jpeg';
import img1 from '../../../Assets/Icons/orderIc.jpeg';
import product1 from '../../../Assets/Images/man.png';

function InventoryMain() {

    const [searchText, setSearchText] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const product = [
        {
            title: 'Azad VMOU Kota M.A (Final year) Education Paper-VII COMPARATIVE EDUCATION) MAED-07',
            sku: 'Web-505',
            unavailable: 0,
            committed: 0,
            available: 20,
            onHand: 20,
            image: product1, // Placeholder image link
        },
        {
            title: 'Azad VMOU Kota M.A (Final year) Education Paper-VII COMPARATIVE EDUCATION) MAED-07',
            sku: 'Web-505',
            unavailable: 0,
            committed: 0,
            available: 20,
            onHand: 20,
            image: product1, // Placeholder image link
        },
        {
            title: 'Azad VMOU Kota M.A (Final year) Education Paper-VII COMPARATIVE EDUCATION) MAED-07',
            sku: 'Web-505',
            unavailable: 0,
            committed: 0,
            available: 20,
            onHand: 20,
            image: product1, // Placeholder image link
        },
        {
            title: 'Azad VMOU Kota M.A (Final year) Education Paper-VII COMPARATIVE EDUCATION) MAED-07',
            sku: 'Web-505',
            unavailable: 0,
            committed: 0,
            available: 20,
            onHand: 20,
            image: product1, // Placeholder image link
        },
        {
            title: 'Azad VMOU Kota M.A (Final year) Education Paper-VII COMPARATIVE EDUCATION) MAED-07',
            sku: 'Web-505',
            unavailable: 0,
            committed: 0,
            available: 20,
            onHand: 20,
            image: product1, // Placeholder image link
        },
    ]


    // sort section 

    const [modalVisible, setModalVisible] = useState(false);
    const [selectOption,setSelectOption] = useState('')

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

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Inventory</Text>
                    {/* Optional buttons and filters like the 'All' button can be placed here */}
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.statsContainer}>
                        <TouchableOpacity>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>All</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.statBox}>
                                <Text style={styles.statLabel}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.statBoxx}>
                        <TouchableOpacity onPress={() => setIsSearchVisible(true)}>
                            <Image source={img1} style={styles.statLabell} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                            <View>
                                <Image source={img2} style={styles.statLabell} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* sort section */}
                    {
                      modalVisible && <View style={styles.sortSection}>
                            <Text>Sort By</Text>
                            {
                                sortBy.map((item, index) => {
                                    return (
                                        <TouchableOpacity  onPress={()=>{setSelectOption(item.title);setModalVisible(false)}}>
                                            <View style={styles.radioCheck} key={index}>
                                                <View style={[styles.radioOuter,{backgroundColor: selectOption === item.title ? 'black' : "white"}]} >
                                                    <View style={styles.radioInner}></View>
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

                {/* Search Input Section */}
                {isSearchVisible && (
                    <View style={styles.searchContainer}>
                        {/* Search Input */}
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Searching all collections"
                            value={searchText}
                            onChangeText={setSearchText}
                        />

                        {/* Cancel Button */}
                        <TouchableOpacity onPress={() => setIsSearchVisible(false)}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>

                        {/* Save as Button (Disabled) */}
                        <View style={styles.saveAsButton}>
                            <Text style={styles.saveAsText}>Save as</Text>
                        </View>
                    </View>
                )}

                {/* inventory list */}

                <ScrollView>
                    {
                        product.map((item, index) => {
                            return (
                                <View style={styles.itemContainer} key={index}>
                                    <Image source={item.image} style={styles.image} />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.sku}>{item.sku}</Text>

                                        <View style={styles.statusContainer}>
                                            <Text style={styles.statusText}>Unavailable</Text>
                                            <Text style={styles.statusValue}>{item.unavailable}</Text>
                                        </View>

                                        <View style={styles.statusContainer}>
                                            <Text style={styles.statusText}>Committed</Text>
                                            <Text style={styles.statusValue}>{item.committed}</Text>
                                        </View>

                                        <View style={styles.statusContainer}>
                                            <Text style={styles.statusText}>Available</Text>
                                            <Text style={styles.statusValue}>{item.available}</Text>
                                        </View>

                                        <View style={styles.statusContainer}>
                                            <Text style={styles.statusText}>On hand</Text>
                                            <Text style={styles.statusValue}>{item.onHand}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })

                    }
                </ScrollView>

            </View>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    header: {
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    filterButton: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    filterText: {
        fontSize: 14,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        marginVertical: 5,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 5,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 5,
    },
    sku: {
        color: '#777',
        marginBottom: 10,
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 2,
        borderBottomWidth: 1,
        borderColor: "#BBBBBB"
    },
    statusText: {
        fontSize: 14,
        color: '#555',
    },
    statusValue: {
        fontSize: 14,
        fontWeight: 'bold',
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
        flexDirection: "row",
        position: "relative"
    },
    statLabell: {
        paddingHorizontal: 6,
        fontSize: 17,
        width: 30,
        height: 28,
        color: "#888",
    },

    // hidden inpput

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
        width: 20,
        height: 20,
        margin: 5,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
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


});

export { InventoryMain };
