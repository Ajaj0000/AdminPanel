import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import TempScreen from "../../Category/CategoryChild/TextEditor";

function ItemSection() {
    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput placeholder="Enter Title" style={styles.input} />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Coupon Code/Rewards Application</Text>
                </View>

                <View style={styles.formGroup11}>
                    <View style={styles.catLable}>
                        <Text style={styles.label}>Category</Text>
                        <TextInput placeholder="Category" style={styles.input} />
                    </View>

                    <View style={styles.catLable}>
                        <Text style={styles.label}>Sub Category</Text>
                        <TextInput placeholder="Sub Category" style={styles.input} />
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Description</Text>
                    {/* <TextInput placeholder="Description" style={styles.input} /> */}
                    <TempScreen/>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>MRP</Text>
                    <TextInput placeholder="MRP" style={styles.input} />
                </View>

                {/* Category Icon */}
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Category Icon</Text>
                    <TouchableOpacity style={styles.uploadBox} >
                        <Text style={styles.uploadText}>Drag and drop a file here or click</Text>
                    </TouchableOpacity>
                </View>

                {/* Buttons */}
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    formGroup: {
        marginBottom: 20,
    },
    formGroup11:{
        flexDirection:"row",
        marginVertical:20,
        justifyContent:"space-between"
    },
    catLable:{
        width:"45%"
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: "black"
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 6,
        padding: 10,
        color: 'black'
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
})

export { ItemSection }