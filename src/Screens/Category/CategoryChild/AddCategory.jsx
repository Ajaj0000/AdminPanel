import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import IcArrow from '../../../Assets/Icons/arrow-down-sign-to-navigate.png';
import IcCancel from '../../../Assets/Icons/closeIc.png'

function CreateCategoryScreen() {

    const [taxes, setTaxes] = useState('');
    const [description, setDescription] = useState('');

    const handleFileUpload = () => {
        // Implement file upload logic here
        console.log('File upload triggered');
    };

    const categoryy=[
        {id:"1", title:"Story"},
        {id:"2", title:"Biography"},
        {id:"3", title:"Competition"},
    ]

    const [open, setOpen] = useState(false)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Select Parent Category */}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Select Parent Category</Text>
                <TouchableOpacity onPress={()=>setOpen(!open)}>
                    <View style={styles.formGroup1}>
                        <Text style={styles.parentCat}>Select Parent Category</Text>
                        <Image source={open ? IcArrow : IcCancel} style={styles.arrowIc} />
                    </View>
                </TouchableOpacity>
                <View>
                    <FlatList
                    data={categoryy}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=>{
                        <TouchableOpacity>
                            
                        </TouchableOpacity>
                    }}
                    />
                </View>
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
            <View style={styles.formGroup}>
                <Text style={styles.label}>Select Tax (Multi Select)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter tax details"
                    value={taxes}
                    onChangeText={setTaxes}
                />
            </View>


            {/* Category Icon */}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Category Icon</Text>
                <TouchableOpacity style={styles.uploadBox} onPress={handleFileUpload}>
                    <Text style={styles.uploadText}>Drag and drop a file here or click</Text>
                </TouchableOpacity>
            </View>


            {/* Description */}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="Enter description"
                    value={description}
                    onChangeText={setDescription}
                    multiline={true}
                    numberOfLines={4}
                />
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
    arrowIc: {
        width: 14,
        height: 14,
        marginRight: 14,
    },
    parentCat: {
        fontSize: 14,
        color: "#BBBBBB",
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
        backgroundColor: '#1E90FF',
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export { CreateCategoryScreen }
