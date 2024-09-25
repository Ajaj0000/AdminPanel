import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, TouchableWithoutFeedback, KeyboardAvoidingView } from "react-native";
import TempScreen from "../../Category/CategoryChild/TextEditor";
import check from '../../../Assets/Icons/check.png';
import box from '../../../Assets/Icons/square.png';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

function ItemSection() {

    const DropdownRef = useRef(null)

    const [isCheck, setIsCheck] = useState(false)


    const [selectedItems, setSelectedItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [photo, setPhoto] = useState(null);

    const toggleSelectItem = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const category = [
        { id: 1, title: "arihant" },
        { id: 2, title: "mother's" },
        { id: 3, title: "agriculture" },
    ];


    // caterory search
    const categoryy = [
        { id: "1", title: "Story" },
        { id: "2", title: "Biography" },
        { id: "4", title: "Competition" },
        { id: "5", title: "RBSE 12" },
        { id: "6", title: "CBSE 12" },
    ];

    const [show, setShow] = useState(false)
    const [searchCategory, setSearchCategory] = useState([...categoryy]);
    const [cate, setCate] = useState([]);

    const handleSearch = (e) => {
        setSearchCategory(e);
        const res = categoryy.filter((item) => item.title.toLowerCase().includes(e.toLowerCase()));
        setCate(res);
    };

    // const handleOutsidePress = () => {
    //     if (open) {
    //         setOpen(false);
    //     }
    // };

    const [selectedImage, setSelectedImage] = useState(null);

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, handleResponse);
    };

    const handleCameraLaunch = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, handleResponse);
    };

    const handleResponse = (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('Image picker error: ', response.error);
        } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
        }
    };




    return (
        <>
            {/* Use TouchableWithoutFeedback to handle outside clicks */}
            <TouchableWithoutFeedback onPress={() => { setShow(false) }}>
                <KeyboardAvoidingView>
                    <ScrollView contentContainerStyle={styles.container}>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Title</Text>
                            <TextInput placeholder="Enter Title" placeholderTextColor="grey" style={styles.input} />
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Category</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Search..."
                                placeholderTextColor="grey"
                                value={searchCategory}
                                onChangeText={handleSearch}
                                onFocus={() => setShow(true)}
                            />

                            {
                                searchCategory.length > 0 && cate.length > 0 && show && <TouchableWithoutFeedback onPress={() => { }}>
                                    <View style={styles.selectList} ref={DropdownRef}>
                                        {
                                            cate.map((itm, index) => {
                                                return (
                                                    <>
                                                        <TouchableOpacity key={index} onPress={() => { setSearchCategory(itm.title); setShow(false) }}>
                                                            <Text style={styles.selectText}>{itm.title}</Text>
                                                        </TouchableOpacity>
                                                    </>
                                                )
                                            })
                                        }
                                    </View>
                                </TouchableWithoutFeedback>
                            }

                        </View>


                        <View style={styles.formGroup}>
                            <View style={styles.label}>
                                <View>
                                    <Text style={styles.label}>Sub Category</Text>
                                    <TouchableOpacity onPress={() => setOpen(!open)}>
                                        <Text style={[styles.input, { padding: 13 }]} onFocus={() => setOpen(!open)}>{selectedItems.join(', ') || "Select here"}</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Dropdown List */}
                                {
                                    open && (
                                        <View style={styles.selectList}>
                                            {category.map((item) => (
                                                <TouchableOpacity key={item.id} onPress={() => { toggleSelectItem(item.title); setOpen(true) }}>
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
                        </View>

                        <View style={styles.formGroup11}>
                            <View style={styles.catLable}>
                                <Text style={styles.label}>MRP</Text>
                                <TextInput placeholder="MRP" placeholderTextColor="grey" style={styles.input} />
                            </View>
                            <View style={styles.catLable}>
                                <Text style={styles.label}>Selling Price</Text>
                                <TextInput placeholder="Selling price" placeholderTextColor="grey" style={styles.input} />
                            </View>
                        </View>

                        {/* weight */}
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Weight</Text>
                            <TextInput placeholder="Weight" placeholderTextColor="grey" style={styles.input} />
                        </View>
                        <TouchableOpacity onPress={() => setIsCheck(!isCheck)}>
                            <View style={styles.checkContainer}>
                                <Text style={[styles.checklabel, { color: isCheck ? 'black' : 'gray' }]}>
                                    Coupon Code/Rewards Application
                                </Text>
                                <Image source={isCheck ? check : box} style={styles.checkBox} />
                            </View>
                        </TouchableOpacity>

                        {/* description */}
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Description</Text>
                            <TempScreen />
                        </View>

                        {/* Category Icon */}
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Category Icon</Text>
                            <TouchableOpacity style={styles.uploadBox} >
                                <Text style={styles.uploadText}><Image source={{ uri: photo }} /></Text>
                            </TouchableOpacity>
                        </View>

                        {/* Buttons */}
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "white"
    },
    formGroup: {
        marginBottom: 20,
    },
    checkContainer: {
        marginBottom: 20,
        alignItems: "center",
        flexDirection: "row",
    },
    checkBox: {
        width: 18,
        height: 17,
        marginLeft: 5,
    },
    checklabel: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 4,

    },
    formGroup11: {
        flexDirection: "row",
        marginVertical: 20,
        justifyContent: "space-between"
    },
    catLable: {
        width: "45%"
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: "black"
    },
    input: {
        // borderWidth: 1,
        elevation: 3,
        borderColor: 'black',
        borderRadius: 6,
        padding: 10,
        color: 'grey',
        backgroundColor: "#F0F0F0",
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
    selectList: {
        backgroundColor: "white",
        elevation: 2,
        padding: 5,
        marginTop: 5,
        position: "absolute",
        width: "100%",
        top: 80,
        zIndex: 10,
    },
    selectText: {
        fontSize: 14,
        fontWeight: "500",
        padding: 5,
        margin: 3,
        color: "black",
    },
    ListItems: {
        flexDirection: "row",
        margin: 3,
        padding: 5,
        marginVertical: 3,
        alignItems: "center"
    },
    checkImg: {
        width: 16,
        height: 16,
        marginRight: 3,
    },
    checkText: {
        fontSize: 14,
        color: "grey",
        marginLeft: 4,
    },
});

export { ItemSection };
