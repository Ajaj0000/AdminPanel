import React, { useState } from 'react';
import { Button, View, ScrollView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';


const MultiImagePicker = () => {
    const [images, setImages] = useState([]);

    const selectImages = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                selectionLimit: 3, // 0 for unlimited selection
            },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else {
                    const selectedImages = response.assets || [];
                    setImages(selectedImages);
                }
            }
        );
    };

    const removeImage = (indexToRemove) => {
        const filteredImages = images.filter((_, index) => index !== indexToRemove);
        setImages(filteredImages);
    };

    return (
        <>
            {/* <Button title="Select Images" onPress={selectImages} /> */}

            <View style={styles.formGroup}>
                <Text style={styles.label}>Category Image</Text>
                <View style={styles.uploadBox}>
                    <ScrollView horizontal={true}>
                        {images.length > 0 ? (
                            images.map((image, index) => (
                                <View key={index} style={{ margin: 5, position: 'relative' }}>
                                    <Image
                                        source={{ uri: image.uri }}
                                        style={{ width: 100, height: 100 }}
                                    />
                                    <TouchableOpacity
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            backgroundColor: 'red',
                                            // padding: 5,
                                            width: 20,
                                            height: 20,
                                            borderRadius: 50,
                                        }}
                                        onPress={() => removeImage(index)}
                                    >
                                        <Text style={{ color: 'white', fontWeight: 'bold',textAlign:"center" }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                            ))
                        ) : (
                            <Text style={{color:"#BBBBBB",textAlign:"center",justifyContent:"center",alignItems:"center",alignSelf:"center",margin:"auto"}}>Select Image</Text>
                        )}
                    </ScrollView>
                </View>
            </View>
            <TouchableOpacity onPress={selectImages}>
                <Text style={styles.ImageBtn}>Select Image</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    formGroup: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: "black"
    },
    uploadBox: {
        borderWidth: 1,
        borderColor: '#AAA',
        borderStyle: 'dashed',
        borderRadius: 6,
        height: 113,
        justifyContent: 'center',
        alignItems: 'center',
        // flexWrap: "wrap"
    },

    ImageBtn: {
        paddingVertical: 5,
        paddingHorizontal: 8,
        margin: 3,
        backgroundColor: "black",
        textAlign: "center",
        color: "#FFF",
        borderRadius:8,
    },
})

export default MultiImagePicker;
