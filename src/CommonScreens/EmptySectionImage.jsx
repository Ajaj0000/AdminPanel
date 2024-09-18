import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

function EmptySectionImage(props) {
    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <Image
                        source={props.EmpImage} // Add your image URL here
                        style={styles.image}
                    />
                    <Text style={styles.title}>{props.manage}</Text>
                    <Text style={styles.subtitle}>
                        {props.track}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => { alert("enter data") }}>
                        <Text style={styles.buttonText}>{props.createBtn}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("enter data")}>
                        <Text style={styles.learnMoreText}>{props.learnMore}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#F5F5F5',
    },
    header: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
        width: '100%',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        alignItems: 'center',
        // marginTop: 40,
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        elevation:1,
    },
    image: {
        width: 250, // Set appropriate width and height
        height: 250,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    learnMoreText: {
        color: '#1E90FF',
        marginTop: 20,
        textDecorationLine: 'underline',
    },
});

export { EmptySectionImage }