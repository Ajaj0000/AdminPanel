import React, { useState } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import IcUpload from '../Assets/Images/upload-arrow.png';
import IcAdd from '../Assets/Icons/add-button.png';
import ImagePicker from 'react-native-image-crop-picker';


const MultiImagePicker = ({imagess}) => {
    const [images, setImages] = useState([]);

    // imagess(images.uri)

    const selectImages = () => {
        ImagePicker.openPicker({
            multiple: true,
            mediaType: 'photo'
        }).then(selectedImages => {
            const newImages = selectedImages.map(image => ({
                uri: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime
            }));
            // Append new images to the existing ones
            setImages(prevImages => [...prevImages, ...newImages]);
        }).catch(e => console.log(e));
    };

    // image confirmation 
    const [modalPopup, setModalPopup] = useState(false);
    const [getId, setGetId] = useState()
    const getImageId = (id) => {
        setGetId(id)
    }

    const removeImage = () => {
        const filteredImages = images.filter((_, index) => index !== getId);
        setImages(filteredImages);
    };

    return (
        <>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Category Image</Text>
                    <View style={styles.uploadBox}>
                        <View style={[styles.uploadImgContainer, { height: 120 }]}>
                            <View>
                                <TouchableOpacity onPress={selectImages} style={{ borderRadius: 5, borderWidth: 1, height: 90, alignItems: "center", justifyContent: "center", borderStyle: "dashed" ,marginRight:3}}>
                                    <Image source={images.length > 0 ? IcAdd : IcUpload} style={styles.uploadImage} />
                                </TouchableOpacity>
                            </View>
                            <ScrollView horizontal={true} nestedScrollEnabled={true}>
                                {
                                    images.map((image, index) => (
                                        <View key={index} style={{ margin: 5, position: 'relative' }}>
                                            <Image
                                                source={{ uri: image.uri }}
                                                // source={imagess}
                                                style={{ width: 100, height: 90, borderRadius: 10 }}
                                            />
                                            <TouchableOpacity
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 0,
                                                    backgroundColor: 'red',
                                                    width: 20,
                                                    height: 20,
                                                    borderRadius: 50,
                                                }}
                                                onPress={() => { getImageId(index); setModalPopup(true) }}
                                            >
                                                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: "center" }}>X</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))
                                }

                            </ScrollView>

                        </View>

                    </View>
                </View>




                {/* remove of image confirmation  */}
                <Modal
                    visible={modalPopup}
                    transparent={true}
                    onRequestClose={() => { setModalPopup(false) }}
                    animationType='slide'
                >
                    <View style={styles.modalSt}>
                        <View style={styles.modalInner}>

                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.modalMessage}>Are You sure want to remove the image !</Text>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", margin: 10, marginTop: 0 }}>
                                <TouchableOpacity style={{ marginRight: 5 }} onPress={() => setModalPopup(false)}>
                                    <Text style={[styles.modalBtn, { color: "grey" }]}>cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { setModalPopup(false); removeImage() }}>
                                    <Text style={styles.modalBtn}>Okay</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

        </>
    );
};

const styles = StyleSheet.create({
    uploadImgContainer: {
        alignItems: "center",
        flexDirection: "row",
        // backgroundColor: 'blue',
        padding: 5,
        borderStyle: "dashed",
        // borderWidth: 1,
    },
    uploadImage: {
        width: 50,
        height: 50,
        margin: 5,
    },
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
        height: 120,
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexWrap: "wrap"
    },

    ImageBtn: {
        paddingVertical: 5,
        paddingHorizontal: 8,
        margin: 3,
        backgroundColor: "black",
        textAlign: "center",
        color: "#FFF",
        borderRadius: 8,
    },

    // pop up modal style 
    modalSt: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalInner: {
        backgroundColor: "#FFF",
        // justifyContent:"center",
        // alignItems:"center",
        elevation: 5,
        width: 300,
        height: 250,
    },
    modalBtn: {
        padding: 10,
        paddingHorizontal: 14,
        fontSize: 16,
        elevation: 10,
        color: "black",
    },
    modalMessage: {
        fontSize: 13,
        color: 'black',
        marginTop: 15,

    }

})

export default MultiImagePicker;
