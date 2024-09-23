import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import TempScreen from "../../Category/CategoryChild/TextEditor";
import check from '../../../Assets/Icons/check.png';
import box from '../../../Assets/Icons/square.png';

function ItemSection() {

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

    // const handleOutsidePress = () => {
    //     if (open) {
    //         setOpen(false);
    //     }
    // };

    // const handleChoosePhoto = () => {
    //     launchImageLibrary({ noData: true }, (response) => {
    //         console.log(response);
    //         if (response) {
    //             setPhoto(response);
    //         }
    //     });
    // };



    return (
        <> 
            {/* Use TouchableWithoutFeedback to handle outside clicks */}
            <TouchableWithoutFeedback>
                <ScrollView contentContainerStyle={styles.container}>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Title</Text>
                        <TextInput placeholder="Enter Title" style={styles.input} />
                    </View>

                    <TouchableOpacity onPress={()=>setIsCheck(!isCheck)}>
                        <View style={styles.checkContainer}>
                            <Image source={isCheck ? check : box} style={styles.checkBox} />
                            <Text style={styles.label}>Coupon Code/Rewards Application</Text>
                        </View>
                    </TouchableOpacity>


                    <View style={styles.formGroup11}>

                        <View style={styles.catLable}>
                            <Text style={styles.label}>Category</Text>
                            <TextInput placeholder="Category" style={styles.input} />
                        </View>

                        <View style={styles.catLable}>
                            <View>
                                <Text style={styles.label}>Sub Category</Text>
                                <TouchableOpacity onPress={() => setOpen(!open)}>
                                    <Text style={styles.input} onFocus={() => setOpen(!open)}>{selectedItems.join(', ') || "Select sub category"}</Text>
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

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Description</Text>
                        <TempScreen />
                    </View>

                    <View style={styles.formGroup11}>
                        <View style={styles.catLable}>
                            <Text style={styles.label}>MRP</Text>
                            <TextInput placeholder="MRP" style={styles.input} />
                        </View>
                        <View style={styles.catLable}>
                            <Text style={styles.label}>Selling Price</Text>
                            <TextInput placeholder="Selling price" style={styles.input} />
                        </View>
                    </View>

                    {/* weight */}
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Weight</Text>
                        <TextInput placeholder="Weight" style={styles.input} />
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
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    formGroup: {
        marginBottom: 20,
    },
    checkContainer: {
        marginBottom: 20,
        flexDirection: "row",
    },
    checkBox: {
        width: 20,
        height: 20,
        marginRight: 5,
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
        backgroundColor: 'black',
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },

    // selected List
    selectList: {
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 1,
        padding: 5,
        marginTop: 5,
        position: "absolute",
        width: "100%",
        top: 80,
        zIndex: 10,
    },
    ListItems: {
        flexDirection: "row",
        margin: 2,
        marginVertical: 3,
    },
    checkImg: {
        width: 22,
        height: 22,
        marginRight: 4,
    },
    checkText: {
        fontSize: 14,
        color: "black",
        marginLeft: 4,
    },
});

export { ItemSection };
