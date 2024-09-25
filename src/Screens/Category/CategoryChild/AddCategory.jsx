import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import IcArrow from '../../../Assets/Icons/arrow-down-sign-to-navigate.png';
import IcCancel from '../../../Assets/Icons/closeIc.png'
import TempScreen from './TextEditor';
import box from '../../../Assets/Icons/square.png';
import check from '../../../Assets/Icons/check.png';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;


function CreateCategoryScreen() {

    const DropdownRef = useRef(null)

    const [taxes, setTaxes] = useState('');
    const [description, setDescription] = useState('');

    const handleFileUpload = () => {
        // Implement file upload logic here
        console.log('File upload triggered');
    };

    const categoryy = [
        { id: "1", title: "Story" },
        { id: "2", title: "Biography" },
        { id: "4", title: "Competition" },
        { id: "5", title: "RBSE 12" },
        { id: "6", title: "CBSE 12" },
    ];

    const [searchCategory, setSearchCategory] = useState([...categoryy]);
    const [cate, setCate] = useState([]);

    const handleSearch = (e) => {
        setSearchCategory(e);
        const res = categoryy.filter((item) => item.title.toLowerCase().includes(e.toLowerCase()));
        setCate(res);
    };
    const handleClick=()=>{
        
    }







    const tex = [
        { id: 1, title: "GST" },
        { id: 2, title: "GST2" },
        { id: 3, title: "GST3" },
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


    // image upload
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
        <TouchableWithoutFeedback onPress={() => {setOpen(false); setOpenn(false)}}>
            <KeyboardAvoidingView >


                <ScrollView contentContainerStyle={styles.container}>
                    {/* Select Parent Category */}
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Select Parent Category</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Search..."
                            placeholderTextColor="grey"
                            value={searchCategory}
                            onChangeText={handleSearch}
                            onFocus={()=>setOpen(true)}
                        />
                        {/* <TouchableOpacity onPress={() => setOpen(!open)}>
                            <View style={styles.formGroup1}>
                                <Text style={styles.parentCat}>{selectValue === '' ? "Select Parent Category" : selectValue}</Text>
                                <Image source={open ? IcCancel : IcArrow} style={styles.arrowIc} />
                            </View>
                        </TouchableOpacity> */}
                        {
                            searchCategory.length > 0 && cate.length > 0 && open && <TouchableWithoutFeedback onPress={() => { }}>
                                <View style={styles.selectList} ref={DropdownRef}>
                                    {
                                         cate.map((itm, index) => {
                                            return (
                                                <>
                                                    <TouchableOpacity key={index} onPress={() => { setSearchCategory(itm.title); setOpen(false) }}>
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

                    {/* Title Input */}
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Title</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter title"
                            placeholderTextColor="grey"
                            value={description}
                            onChangeText={setDescription}
                        />
                    </View>


                    {/* Select Tax (Multi Select) */}
                    <View style={styles.catLable}>
                        <View>
                            <Text style={styles.label}>Tax (Multi Select)</Text>
                            <TouchableOpacity onPress={() => setOpenn(!openn)}>
                                <Text style={styles.input} onFocus={() => setOpenn(!openn)}>{selectedItems.join(', ') || "Tax (Multi Select)"}</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Dropdown List */}
                        {
                            openn && (
                                <TouchableWithoutFeedback onPress={()=>{ }}>
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
                                </TouchableWithoutFeedback>

                            )
                        }

                    </View>


                    {/* Category Icon */}
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Category Image</Text>
                        <TouchableOpacity style={styles.uploadBox} onPress={openImagePicker}>
                            <Text style={styles.uploadText}>{selectedImage ? <Image source={{ uri: selectedImage }} /> : "Click here to Select Image"}</Text>
                        </TouchableOpacity>
                    </View>


                    {/* Description */}
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Description</Text>
                        <TempScreen />
                    </View>

                    {/* Buttons */}
                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "white"
    },
    formGroup1: {
        elevation: 3,
        borderColor: 'black',
        color: 'grey',
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    // select list

    selectText: {
        fontSize: 14,
        fontWeight: "500",
        padding: 5,
        margin: 3,
        color: "black",
    },

    arrowIc: {
        width: 14,
        height: 14,
        marginRight: 14,
    },
    parentCat: {
        fontSize: 14,
        color: "grey",
        padding: 5,
        margin: 5
    },
    formGroup: {
        marginBottom: 20,
    },
    catLable: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
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
        elevation: 3,
        borderColor: 'black',
        borderRadius: 6,
        padding: 10,
        color: 'grey',
        backgroundColor: "#F0F0F0",
    },
    textArea: {
        elevation: 3,
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
    selectList: {
        backgroundColor: "white",
        elevation: 2,
        marginTop: 5,
        position: "absolute",
        width: "100%",
        top: 70,
        zIndex: 10,
        padding: 10
    },
    ListItems: {
        flexDirection: "row",
        margin: 3,
        padding: 5,
        alignItems: "center",
        marginVertical: 3,
    },
    checkImg: {
        width: 15,
        height: 15,
        marginRight: 2,
    },
    checkText: {
        fontSize: 14,
        color: "black",
        marginLeft: 4,
    },
});

export { CreateCategoryScreen }
