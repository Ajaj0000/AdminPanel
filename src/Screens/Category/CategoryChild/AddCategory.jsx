import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { styles } from './AddItemAddCateStyle';
import TempScreen from './TextEditor';
import box from '../../../Assets/Icons/square.png';
import check from '../../../Assets/Icons/check.png';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
import MultiImagePicker from '../../../CommonScreens/ImagePicker';
let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;


function CreateCategoryScreen() {

    const DropdownRef = useRef(null)
    const [description, setDescription] = useState('');

    const handleFileUpload = () => {
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


    const tex = [
        { id: 1, title: "GST" },
        { id: 2, title: "GST2" },
        { id: 3, title: "GST3" },
    ]


    const [open, setOpen] = useState(false)

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
                    <View style={styles.catLablee}>
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
                    
                      <MultiImagePicker/>
                   
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



export { CreateCategoryScreen }
