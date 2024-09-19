import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Modal, Pressable } from 'react-native';
import img2 from '../../../Assets/Icons/ich.jpeg';
import product1 from '../../../Assets/Images/man.png';

function InventoryMain() {


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


    //update itme section

    const [adjustValue, setAdjustValue] = useState(0);
    const [newValue, setNewValue] = useState(20);
    const [selectedReason, setSelectedReason] = useState("Correction (default)");

    const handleAdjustValueChange = (type) => {
        if (type === 'increase') setAdjustValue(adjustValue + 1);
        if (type === 'decrease' && adjustValue > 0) setAdjustValue(adjustValue - 1);
    };

    const handleNewValueChange = (type) => {
        if (type === 'increase') setNewValue(newValue + 1);
        if (type === 'decrease' && newValue > 0) setNewValue(newValue - 1);
    };


    // sort section 

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

            <ScrollView>
                {/* Search Input Section */}

                <View style={styles.searchContainer}>

                    {/* Save as Button (Disabled) */}
                    <View style={styles.saveAsButton}>
                        <Text style={styles.saveAsText}>Search:</Text>
                    </View>
                    {/* Search Input */}
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Searching all collections"
                    />
                </View>
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

                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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
                                            <TouchableOpacity onPress={() => { setSelectOption(item.title); setModalVisible(false) }}>
                                                <View style={styles.radioCheck} key={index}>
                                                    <View style={styles.radioOuter} >
                                                        <View style={[styles.radioInner, { backgroundColor: selectOption === item.title ? '#a3e3fa' : "white" }]}></View>
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

                {/* update section */}
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerText}>On hand (20)</Text>
                        <TouchableOpacity>
                            <Text style={styles.closeButton}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Adjustment Section */}
                    <View style={styles.adjustSection}>
                        <View style={styles.adjustItem}>
                            <Text>Adjust by</Text>
                            <View style={styles.inputRow}>
                                <TextInput
                                    style={styles.input}
                                    value={String(adjustValue)}
                                    editable={false}
                                />
                                <View style={styles.buttonGroup}>
                                    <TouchableOpacity
                                        style={styles.adjustButton}
                                        onPress={() => handleAdjustValueChange('decrease')}>
                                        <Text style={styles.buttonText}>-</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.adjustButton}
                                        onPress={() => handleAdjustValueChange('increase')}>
                                        <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.adjustItem}>
                            <Text>New</Text>
                            <View style={styles.inputRow}>
                                <TextInput
                                    style={styles.input}
                                    value={String(newValue)}
                                    editable={false}
                                />
                                <View style={styles.buttonGroup}>
                                    <TouchableOpacity
                                        style={styles.adjustButton}
                                        onPress={() => handleNewValueChange('decrease')}>
                                        <Text style={styles.buttonText}>-</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.adjustButton}
                                        onPress={() => handleNewValueChange('increase')}>
                                        <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Reason Section */}
                    <View style={styles.reasonSection}>
                        <Text>Reason</Text>
                        {/* <Picker
                        selectedValue={selectedReason}
                        style={styles.picker}
                        onValueChange={(itemValue) => setSelectedReason(itemValue)}>
                        <Picker.Item label="Correction (default)" value="Correction (default)" />
                        <Picker.Item label="Damaged" value="Damaged" />
                        <Picker.Item label="Lost" value="Lost" />
                    </Picker> */}
                    </View>

                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.doneButton} disabled>
                            <Text style={styles.doneButtonText}>Done</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
        fontSize: 17,
        fontWeight: 'bold',
        color: "black"
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
  
    saveAsButton: {
    
        paddingRight: 10,
        paddingVertical: 8,
   
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

export { InventoryMain };
