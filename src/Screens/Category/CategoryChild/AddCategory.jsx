import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { styles } from './AddItemAddCateStyle';
import TempScreen from './TextEditor';
import box from '../../../Assets/Icons/square.png';
import check from '../../../Assets/Icons/check.png';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
import MultiImagePicker from '../../../CommonScreens/ImagePicker';
import { useSelector } from 'react-redux';


function CreateCategoryScreen() {

    const DropdownRef = useRef(null)

    const token = useSelector((state) => state.Token.value.accessToken);
    const [categoryName, setCategoryName] = useState('');
    const [icon, setIcon] = useState('https://5.imimg.com/data5/EK/HF/JT/SELLER-83611645/illustrated-history-of-india.jpg');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState();

    const handleDescription = (id) => {
        setDescription(id);
    };

    const bodyData = {
        categoryName: categoryName,
        description: description,
        categoryIconRefId: icon,
        categoryId: categoryId,
    };

    const PostData = async () => {
        try {
            const responce = await fetch('http://172.22.128.1:8036/ops/category/save', {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            })

            const getRe = await responce.json();
            if (getRe) {
                alert('Data add successfully')
                // setShow(true);rq
            } else {
                alert('somthig went wrong')
            }
        } catch (e) {
            console.log(e, 'error in posting data of catrgory')
        }
    };

    const [parentCat, setParentCat] = useState([]);
    const [filterCateListt, setFilterCateListt] = useState([]);
    const categoryList = async () => {
        try {
            const responce = await fetch('http://172.22.128.1:8036/ops/category/parentCategoryList', {
                headers: {
                    "Authorization": token
                }
            });
            const getRes = await responce.json();
            console.log(getRes, 'response');
            if (getRes) {
                setParentCat(getRes?.responsePacket);
                setFilterCateListt(getRes?.responsePacket);
            };
        } catch (error) {
            console.log(error, 'error in api parentCategory list')
        }

    };
    useEffect(() => {
        categoryList();
    }, []);

    const handleSearch = (e) => {
        const res = parentCat.filter((item) => item.value.toLowerCase().includes(e.toLowerCase()));
        setFilterCateListt(res);
    };

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [getInput, setGetInput] = useState();

    const handleClick = (id) => {
        if (id) {
            setGetInput(id.value);
            setCategoryId(id.key);
            setOpen(false);
        };
    };

    useEffect(() => {
        if (!getInput) {
            setCategoryId('');
        };
    }, []);
    console.log(categoryId, 'categoryId');
    console.log(getInput, 'getInput');


    return (
        <>
            <TouchableWithoutFeedback onPress={() => { setOpen(false) }}>
                <KeyboardAvoidingView >
                    <ScrollView contentContainerStyle={styles.container}>
                        {/* Select Parent Category */}
                        <Text style={styles.label}>Select Parent Category</Text>
                        {/* {
                                value.length > 0 &&
                                <ScrollView contentContainerStyle={{ flexDirection: "row", alignItems: "center" }} nestedScrollEnabled={true} horizontal={true}>
                                    {
                                        value.map((item, index) =>
                                            <View onPress={() => setOpen(!show)} style={[styles.input, { padding: 10, backgroundColor: "#FFF", borderRadius: 15, elevation: 5, margin: 2, flexDirection: "row" }]}>
                                                <Text onPress={() => setOpen(true)} style={{ color: "black" }}>{item}</Text>
                                                <TouchableOpacity onPress={() => handleRemoveCat(item)}>
                                                    <Text style={{ marginLeft: 5, color: "black" }}>X</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                </ScrollView>
                            } */}

                        <View style={styles.formGroup}>

                            <TextInput
                                style={[styles.input, { marginTop: 5 }]}
                                placeholder="Search..."
                                placeholderTextColor="black"
                                onChangeText={(e) => { handleSearch(e); setGetInput(e) }}
                                value={getInput}
                                onFocus={() => { setOpen(true) }}
                            />
                            {/* searchCategory */}
                            {/* (text) => handleSearch(text) */}

                            {
                                open &&
                                <TouchableWithoutFeedback onPress={() => { }}>
                                    <View style={[styles.selectList, { top: 55 }]} ref={DropdownRef}>
                                        <ScrollView contentContainerStyle={{ maxHeight: 200 }}>
                                            {
                                                filterCateListt.length > 0 ?
                                                    filterCateListt.map((itm) => {
                                                        return (
                                                            <>
                                                                <TouchableOpacity key={itm.key} onPress={() => { handleClick(itm) }}>
                                                                    <View style={[styles.ListItems]}>
                                                                        {/* <Image source={value ? check : box} style={styles.checkImg} /> */}
                                                                        <Text style={styles.selectText}>{itm.value}</Text>
                                                                    </View>

                                                                </TouchableOpacity>
                                                            </>
                                                        )
                                                    }) :
                                                    <Text style={styles.selectText}>No such category Available</Text>
                                            }
                                        </ScrollView>

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
                                value={categoryName}
                                onChangeText={setCategoryName}
                            />
                        </View>


                        {/* Select Tax (Multi Select) */}
                        {/* <View style={styles.catLablee}>
                                    <View>
                                        <Text style={styles.label}>Tax (Multi Select)</Text>
                                        <TouchableOpacity onPress={() => {setOpenn(!openn); setOpen(false)}}>
                                            <Text style={[styles.input, { paddingVertical: 16 }]} onFocus={() => setOpenn(!openn)}>{selectedItems.join(', ') || "Tax (Multi Select)"}</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {
                                        openn && (
                                            <TouchableWithoutFeedback onPress={() => { }}>
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

                                </View> */}


                        {/* Category Icon */}

                        <MultiImagePicker />

                        {/* Description */}
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Description</Text>
                            <TempScreen description={handleDescription} />
                        </View>

                        {/* Buttons */}
                        <TouchableOpacity style={styles.submitButton} onPress={PostData}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>

           
        </>
    );
};



export { CreateCategoryScreen }
