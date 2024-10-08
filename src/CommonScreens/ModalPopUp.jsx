import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

function ModalPopUp({ isOpen, action, cancel, confirm }) {

    if (!isOpen) {
        return null
    };

    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isOpen}
                    onRequestClose={() => {cancel}}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{action}</Text>
                            <View style={styles.flexBx}>
                                <Pressable
                                    style={styles.button}
                                    onPress={confirm}
                                >
                                    <Text style={styles.textStyle}>ok</Text>
                                </Pressable>
                                <Pressable onPress={cancel} style={styles.cancelBtn}>
                                    <Text style={{color:"grey"}}>Cancel</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    flexBx:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
    },
    button: {
        backgroundColor: "black",
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginRight:5,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
       paddingHorizontal:5,

    },
    cancelBtn:{
        backgroundColor:"#BBBBB",
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginRight:5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export { ModalPopUp }