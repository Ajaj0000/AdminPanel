import React, { useRef, useState } from "react";
import { ScrollView, Text, TextInput, View, TouchableOpacity, Image, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "../../Category/CategoryChild/AddItemAddCateStyle";
import TempScreen from "../../Category/CategoryChild/TextEditor";
import check from '../../../Assets/Icons/check.png';
import box from '../../../Assets/Icons/square.png';
import MultiImagePicker from "../../../CommonScreens/ImagePicker";
import IcSearch from '../../../Assets/Icons/search.png';


function ItemSection() {

    const DropdownRef = useRef(null)

    const [isCheck, setIsCheck] = useState(false)

    const [selectedItems, setSelectedItems] = useState([]);
    const [open, setOpen] = useState(false);

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
        { id: "7", title: "Science fiction" },
        { id: "8", title: "Fantsy" },
        { id: "9", title: "Historical Fiction" },
        { id: "10", title: "Horror" },
        { id: "11", title: "Romance" },
        { id: "12", title: "Short Story" },
        { id: "13", title: "Classic" },
        { id: "14", title: "Memori" },
        { id: "15", title: "Thriller" }
    ];
    const [cate, setCate] = useState([...categoryy]);


    const [searchCategory, setSearchCategory] = useState();
    const [value, setValue] = useState([])
    const [show, setShow] = useState(false)

    const handleSearch = (e) => {
        // e.preventDefault();
        setSearchCategory(e)
        const res = categoryy.filter((item) => item.title.toLowerCase().includes(e.toLowerCase()));
        setCate(res);
    };
    const handleClick = (id) => {
        if (!value.includes(id)) {
            setValue([...value, id])
        } else if (value.includes(id)) {
            setValue(value.filter(item => item !== id))
        }
        setSearchCategory('')
        setCate(categoryy)
    }
    const handleRemoveCat = (e) => {
        setValue(value.filter(item => item !== e))
    }


    return (
        <>

            {
                show || open ?
                    <TouchableWithoutFeedback onPress={() => { setShow(false);setOpen(false) }}>
                        < KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                            <ScrollView contentContainerStyle={styles.container}>
                                <View style={styles.formGroup}>
                                    <Text style={styles.label}>Title</Text>
                                    <TextInput placeholder="Enter Title" placeholderTextColor="grey" style={styles.input} />
                                </View>

                                <Text style={styles.label}>Category</Text>
                                {
                                    value.length > 0 &&
                                    <ScrollView contentContainerStyle={{ flexDirection: "row", alignItems: "center" }} nestedScrollEnabled={true} horizontal={true}>
                                        {
                                            value.map((item, index) =>
                                                <View onPress={() => setShow(!show)} style={[styles.input, { padding: 10, backgroundColor: "#FFF", borderRadius: 15, elevation: 5, margin: 2, flexDirection: "row" }]}>
                                                    <Text onPress={() => setShow(true)} style={{ color: "black" }}>{item}</Text>
                                                    <TouchableOpacity onPress={() => handleRemoveCat(item)}>
                                                        <Text style={{ marginLeft: 5, color: "black" }}>X</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )}
                                    </ScrollView>
                                }

                                <View style={styles.formGroup}>



                                    {/* <View style={styles.flexSearch}> */}
                                    {/* <Image source={IcSearch} style={styles.SearchIc} /> */}
                                    <TextInput
                                        placeholder="Search..."
                                        style={[styles.input, { marginTop: 5 }]}
                                        onChangeText={(text) => handleSearch(text)}
                                        value={searchCategory}
                                        placeholderTextColor="black"
                                        onFocus={() => setShow(true)}
                                    />
                                    {/* </View> */}
                                    {/* <TextInput
                                style={styles.input}
                                placeholder="Search..."
                                placeholderTextColor="grey"
                                value={searchCategory}
                                onChangeText={handleSearch}
                                onFocus={() => setShow(true)}
                            /> */}
                                    {/*  searchCategory.length > 0 && cate.length > 0 && */}
                                    {
                                        show &&
                                        <TouchableWithoutFeedback onPressOut={() => { }}>
                                            <View style={[styles.selectList,{top:55}]} ref={DropdownRef}>
                                                <View>
                                                    <ScrollView contentContainerStyle={{ maxHeight: 200 }} nestedScrollEnabled={true} showsVerticalScrollIndicator={true}>
                                                        {
                                                           cate.length > 0 ?
                                                           cate.map((itm, index) => {
                                                            return (
                                                                <>
                                                                    <TouchableOpacity key={index} onPress={() => { handleClick(itm.title) }}>
                                                                        <View style={[styles.ListItems]}>
                                                                            <Image source={value.includes(itm.title) ? check : box} style={styles.checkImg} />
                                                                            <Text style={styles.selectText}>{itm.title}</Text>
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                </>
                                                            )
                                                        }) : 
                                                        <Text style={styles.selectText}>No such category Available</Text>
                                                        }
                                                    </ScrollView>
                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    }

                                </View>


                                <View style={styles.formGroup}>

                                    <View>
                                        <Text style={styles.label}>Sub Category</Text>
                                        {/* <TouchableOpacity onPress={() => setOpen(!open)}> */}
                                        <Text style={[styles.input, { padding: 15 }]} onPress={() => setOpen(!open)}>{selectedItems.join(', ') || "Select here"}</Text>
                                        {/* </TouchableOpacity> */}
                                    </View>

                                    {/* Dropdown List */}
                                    {
                                        open && (
                                            <View style={styles.selectList}>
                                                {
                                                    category.map((item) => (
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

                                {/* Category Icon */}
                                <MultiImagePicker />

                                {/* description */}
                                <View style={styles.formGroup}>
                                    <Text style={styles.label}>Description</Text>
                                    <TempScreen />
                                </View>

                                {/* Buttons */}
                                <TouchableOpacity style={styles.submitButton}>
                                    <Text style={styles.submitButtonText}>Submit</Text>
                                </TouchableOpacity>

                            </ScrollView >

                        </KeyboardAvoidingView >
                    </TouchableWithoutFeedback>
                    :
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <ScrollView contentContainerStyle={styles.container}>
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>Title</Text>
                                <TextInput placeholder="Enter Title" placeholderTextColor="grey" style={styles.input} />
                            </View>

                            <Text style={styles.label}>Category</Text>
                            {
                                value.length > 0 &&
                                <ScrollView contentContainerStyle={{ flexDirection: "row", alignItems: "center" }} nestedScrollEnabled={true} horizontal={true}>
                                    {
                                        value.map((item, index) =>
                                            <View onPress={() => setShow(!show)} style={[styles.input, { padding: 10, backgroundColor: "#FFF", borderRadius: 15, elevation: 5, margin: 2, flexDirection: "row" }]}>
                                                <Text onPress={() => setShow(!show)} style={{ color: "black" }}>{item}</Text>
                                                <TouchableOpacity onPress={() => handleRemoveCat(item)}>
                                                    <Text style={{ marginLeft: 5, color: "black" }}>X</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                </ScrollView>
                            }

                            <View style={styles.formGroup}>



                                {/* <View style={styles.flexSearch}> */}
                                {/* <Image source={IcSearch} style={styles.SearchIc} /> */}
                                <TextInput
                                    placeholder="Search..."
                                    style={[styles.input, { marginTop: 5 }]}
                                    onChangeText={(text) => handleSearch(text)}
                                    value={searchCategory}
                                    placeholderTextColor="black"
                                    onFocus={() => setShow(true)}
                                />
                                {/* </View> */}
                                {/* <TextInput
                                    style={styles.input}
                                    placeholder="Search..."
                                    placeholderTextColor="grey"
                                    value={searchCategory}
                                    onChangeText={handleSearch}
                                    onFocus={() => setShow(true)}
                                /> */}
                                {/*  searchCategory.length > 0 && cate.length > 0 && */}
                                {
                                    show &&
                                    <TouchableWithoutFeedback onPressOut={() => { }}>
                                        <View style={styles.selectList} ref={DropdownRef}>
                                            <View>
                                                <ScrollView contentContainerStyle={{ maxHeight: 200 }} nestedScrollEnabled={true} showsVerticalScrollIndicator={true}>
                                                    {
                                                        cate.map((itm, index) => {
                                                            return (
                                                                <>
                                                                    <TouchableOpacity key={index} onPress={() => { handleClick(itm.title) }}>
                                                                        <View style={styles.ListItems}>
                                                                            <Image source={value.includes(itm.title) ? check : box} style={styles.checkImg} />
                                                                            <Text style={styles.selectText}>{itm.title}</Text>
                                                                        </View>

                                                                    </TouchableOpacity>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </ScrollView>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                }

                            </View>


                            <View style={styles.formGroup}>

                                <View>
                                    <Text style={styles.label}>Sub Category</Text>
                                    {/* <TouchableOpacity onPress={() => setOpen(!open)}> */}
                                    <Text style={[styles.input, { padding: 15 }]} onPress={() => setOpen(!open)}>{selectedItems.join(', ') || "Select here"}</Text>
                                    {/* </TouchableOpacity> */}
                                </View>

                                {/* Dropdown List */}
                                {
                                    open && (
                                        <View style={styles.selectList}>
                                            {
                                                category.map((item) => (
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

                            {/* Category Icon */}
                            <MultiImagePicker />

                            {/* description */}
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>Description</Text>
                                <TempScreen />
                            </View>

                            {/* Buttons */}
                            <TouchableOpacity style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Submit</Text>
                            </TouchableOpacity>

                        </ScrollView >

                    </KeyboardAvoidingView>
            }
        </>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//         backgroundColor: "white"
//     },
//     formGroup: {
//         marginBottom: 10,
//     },
//     checkContainer: {
//         marginBottom: 20,
//         alignItems: "center",
//         flexDirection: "row",
//     },
//     checkBox: {
//         width: 18,
//         height: 17,
//         marginLeft: 5,
//     },
//     checklabel: {
//         fontSize: 13,
//         fontWeight: 'bold',
//         marginBottom: 4,

//     },
//     formGroup11: {
//         flexDirection: "row",
//         marginVertical: 20,
//         justifyContent: "space-between"
//     },
//     catLable: {
//         width: "45%"
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 4,
//         color: "black"
//     },
//     input: {
//         // borderWidth: 1,
//         elevation: 3,
//         borderColor: 'black',
//         borderRadius: 6,
//         padding: 10,
//         color: 'grey',
//         backgroundColor: "#F0F0F0",
//     },
//     uploadBox: {
//         borderWidth: 1,
//         borderColor: '#AAA',
//         borderStyle: 'dashed',
//         borderRadius: 6,
//         height: 150,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     uploadText: {
//         color: '#AAA',
//     },
//     submitButton: {
//         backgroundColor: 'black',
//         paddingVertical: 12,
//         borderRadius: 6,
//         alignItems: 'center',
//     },
//     submitButtonText: {
//         color: 'white',
//         fontWeight: 'bold',
//     },

//     // selected List
//     selectList: {
//         backgroundColor: "white",
//         elevation: 2,
//         padding: 5,
//         marginTop: 5,
//         position: "absolute",
//         width: "100%",
//         top: 80,
//         zIndex: 10,
//     },
//     selectText: {
//         fontSize: 14,
//         fontWeight: "500",
//         padding: 5,
//         margin: 3,
//         color: "black",
//     },
//     ListItems: {
//         flexDirection: "row",
//         margin: 3,
//         padding: 5,
//         marginVertical: 3,
//         alignItems: "center"
//     },
//     checkImg: {
//         width: 16,
//         height: 16,
//         marginRight: 3,
//     },
//     checkText: {
//         fontSize: 14,
//         color: "grey",
//         marginLeft: 4,
//     },
// });


export { ItemSection };