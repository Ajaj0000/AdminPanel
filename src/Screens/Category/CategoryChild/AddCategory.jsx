import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import IcArrow from '../../../Assets/Icons/arrow-down-sign-to-navigate.png';
import IcCancel from '../../../Assets/Icons/closeIc.png'
import TempScreen from './TextEditor';
import box from '../../../Assets/Icons/square.png';
import check from '../../../Assets/Icons/check.png';


function CreateCategoryScreen() {

    const [taxes, setTaxes] = useState('');
    const [description, setDescription] = useState('');

    const handleFileUpload = () => {
        // Implement file upload logic here
        console.log('File upload triggered');
    };

    const categoryy = [
        { id: "1", title: "Story" },
        { id: "2", title: "Biography" },
        { id: "3", title: "Competition" },
    ];

    const tex =[
        {id:1, title:"GST"},
        {id:2, title:"GST2"},
        {id:3, title:"GST3"},
    ]


    const [open, setOpen] = useState(false)
    const [selectValue, setSelectedValue] = useState('')

    const [selectedItems, setSelectedItems] = useState([]);
    const [openn, setOpenn] = useState(false)

    const toggleSelectItem = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Select Parent Category */}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Select Parent Category</Text>
                <TouchableOpacity onPress={() => setOpen(!open)}>
                    <View style={styles.formGroup1}>
                        <Text style={styles.parentCat}>{selectValue === '' ? "Select Parent Category" : selectValue}</Text>
                        <Image source={open ? IcCancel : IcArrow} style={styles.arrowIc} />
                    </View>
                </TouchableOpacity>
                {
                    open && <View style={styles.selectList}>
                        {
                            categoryy.map((itm, index) => {
                                return (
                                    <>
                                        <TouchableOpacity key={index} onPress={() => { setSelectedValue(itm.title); setOpen(false) }}>
                                            <Text style={styles.selectText}>{itm.title}</Text>
                                        </TouchableOpacity>
                                    </>
                                )
                            })
                        }
                    </View>
                }
            </View>

            {/* Title Input */}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter title"
                    value={description}
                    onChangeText={setDescription}
                />
            </View>


            {/* Select Tax (Multi Select) */}
            <View style={styles.catLable}>
                <View>
                    <Text style={styles.label}>Tex (Multi Select)</Text>
                    <TouchableOpacity onPress={() => setOpenn(!openn)}>
                        <Text style={styles.input} onFocus={() => setOpenn(!openn)}>{selectedItems.join(', ') || "Tex (Multi Select)"}</Text>
                    </TouchableOpacity>
                </View>

                {/* Dropdown List */}
                {
                    openn && (
                        <View style={styles.selectList}>
                            {tex.map((item) => (
                                <TouchableOpacity key={item.id} onPress={() => { toggleSelectItem(item.title); setOpenn(true) }}>
                                    <View style={styles.ListItems}>
                                        <Image source={selectedItems.includes(item.title) ? check : box} style={styles.checkImg} />
                                        <Text style={styles.checkText}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>

                    )
                }

            </View>


            {/* Category Icon */}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Category Image</Text>
                <TouchableOpacity style={styles.uploadBox} onPress={handleFileUpload}>
                    <Text style={styles.uploadText}>Drag and drop a Image here or click</Text>
                </TouchableOpacity>
            </View>


            {/* Description */}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Description</Text>
                {/* <TextInput
                    style={styles.textArea}
                    placeholder="Enter description"
                    value={description}
                    onChangeText={setDescription}
                    multiline={true}
                    numberOfLines={4}
                /> */}
                <TempScreen />
            </View>

            {/* Buttons */}
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    formGroup1: {
        borderWidth: 1,
        borderColor: "#BBBBBB",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    // select list

    selectList: {
        backgroundColor: "white",
        elevation: 1,
        marginTop: 5,
        position: "absolute",
        width: "100%",
        top: 70,
        zIndex: 10,
    },
    selectText: {
        fontSize: 14,
        fontWeight: "500",
        borderBottomWidth: 1,
        padding: 5,
        borderBottomColor: "#BBBBBB",
        color: "grey",
    },

    arrowIc: {
        width: 14,
        height: 14,
        marginRight: 14,
    },
    parentCat: {
        fontSize: 14,
        color: "black",
        padding: 5,
        margin: 5
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: "black"
    },
    picker: {
        height: 50,
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 6,
    },
    radioGroup: {
        flexDirection: 'row',
        marginTop: 10,
    },
    radio: {
        marginRight: 10,
        color: '#888',
    },
    radioSelected: {
        marginRight: 10,
        fontWeight: 'bold',
        color: '#000',
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 6,
        padding: 10,
        color: 'black'
    },
    textArea: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 6,
        padding: 10,
        textAlignVertical: 'top',
    },
    uploadBox: {
        borderWidth: 1,
        borderColor: '#AAA',
        borderStyle: 'dashed',
        borderRadius: 6,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadText: {
        color: '#AAA',
    },
    checkboxLabel: {
        marginLeft: 10,
    },
    submitButton: {
        backgroundColor: 'black',
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

     // selected List
    ListItems: {
        flexDirection: "row",
        margin: 2,
        marginVertical: 3,
    },
    checkImg: {
        width: 22,
        height: 22,
        marginRight: 4,
    },
    checkText: {
        fontSize: 14,
        color: "black",
        marginLeft: 4,
    },
});

export { CreateCategoryScreen }
