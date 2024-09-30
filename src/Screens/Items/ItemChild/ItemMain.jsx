import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, ActivityIndicator, Modal } from "react-native";
import { ItemCateStyles } from "../../Category/CategoryChild/ItemCateStyle";
import icSort from '../../../Assets/Icons/funnel.png';
import image1 from "../../../Assets/Icons/bin.png";
import img from "../../../Assets/Images/book1.webp";
import IcEdit from '../../../Assets/Icons/edit.png';
import IcStop from '../../../Assets/Icons/binRed.png';
import IcSearch from '../../../Assets/Icons/search.png';

function ItemMain({ handle }) {

    const refSort = useRef(null)

    const data = [
        { id: '1', title: 'Parth Rajasthan Adhyayan Class 6-10 (English Medium)', status: true },
        { id: '2', title: 'Moomal Rajasthan 7001 Objective Questions (English Medium)', status: false },
        { id: '3', title: 'Rbd Gk Guru Subhash Charan Rajasthan Ka Itihaas (Hastlikhit Notes)', status: true },
        { id: '4', title: 'RBD Rajasthan ki Kala Sanskriti (Hastlikhite Notes)', status: true },
        { id: '5', title: 'Rbd Gk Guru Subhash Charan Rajasthan Ka Bhugol (Hastlikhit Notes)', status: false },
        { id: '6', title: 'Rath Rajasthan Manchitrawali & Samanya Gyan By Dr Mukesh Pancholi', status: false },
        { id: '7', title: 'Utkarsh Rajasthan Jila Darshan By Narendra Choudhary Sir', status: true },
        { id: '8', title: 'Rai Marudhara Practice Workbook By Gaurav Budania', status: true },
        { id: '9', title: 'Mumal india current gk 2023-24', status: false },
        { id: '10', title: 'Parth Rajasthan Adhyayan Class 6-10 (English Medium)', status: true },
        { id: '11', title: 'Moomal Rajasthan 7001 Objective Questions (English Medium)', status: true },
        { id: '12', title: 'Rbd Gk Guru Subhash Charan Rajasthan Ka Itihaas (Hastlikhit Notes)', status: false },
    ];
    const [books, setBooks] = useState([...data])

    // funtion of pop up modal
    const [popup, setPopup] = useState(false);

    const [delId, setDelId] = useState()
    const getId = (idd) => {
        setDelId(idd)
    };
    const handlePopup = () => {
        const del = books.filter((item) => item.id !== delId)
        setBooks(del)
    };

    // handle data display
    const [display, setDisplay] = useState(5);
    const [loading, setLoading] = useState(false)
    const scrollViewRef = useRef(null)

    const loadMoreData = () => {
        if (!loading) {
            setLoading(true);
            // Mocking a load function, in a real scenario you fetch more data here
            setTimeout(() => {
                setDisplay((prevCount) => prevCount + 5); // increase the displayed items
                setLoading(false);
            }, 1500);
        }
    };

    const handleScroll = ({ nativeEvent }) => {
        const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
        const isBottomReached =
            layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

        if (isBottomReached && !loading) {
            loadMoreData();
        }
    };

    // ItemMain({ handle })

    const [modalVisible, setModalVisible] = useState(false);
    const [selectOption, setSelectOption] = useState('');

    const sortBy = [
        { title: "Product Title" },
        { title: "SKU" },
        { title: "Unavailable" },
        { title: "Committed" },
        { title: "Available" },
        { title: "On hand" },
    ];

    return (
        <>
            <TouchableWithoutFeedback onPress={() => { setModalVisible(false) }}>
                <KeyboardAvoidingView>
                    <ScrollView
                        ref={scrollViewRef}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                    >

                        <View style={ItemCateStyles.maincontainer}>
                            <View style={ItemCateStyles.containerHeader}>
                                <Text style={ItemCateStyles.order}>Item</Text>
                                <TouchableOpacity onPress={handle}>
                                    <View style={ItemCateStyles.actionBox}>
                                        <Text style={ItemCateStyles.create}>Add Item</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/* Search Input Section */}
                            <View style={ItemCateStyles.searchContainer}>
                                <Image source={IcSearch} style={ItemCateStyles.searchIcImg} />
                                <TextInput
                                    style={ItemCateStyles.searchInput}
                                    placeholder="Search..."
                                    placeholderTextColor="grey"
                                />
                                <View style={ItemCateStyles.sortBox}>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        <View>
                                            <Image source={icSort} style={ItemCateStyles.statLabell} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* sort section */}
                                {modalVisible && (
                                    <TouchableWithoutFeedback onPress={() => { }}>
                                        <View style={ItemCateStyles.sortSection} ref={refSort}>
                                            <Text>Sort By</Text>
                                            {sortBy.map((item, index) => (
                                                <TouchableOpacity key={index} onPress={() => { setSelectOption(item.title); setModalVisible(false); }}>
                                                    <View style={ItemCateStyles.radioCheck}>
                                                        <View style={ItemCateStyles.radioOuter}>
                                                            <View style={[ItemCateStyles.radioInner, { backgroundColor: selectOption === item.title ? 'black' : 'white' }]}></View>
                                                        </View>
                                                        <Text style={{ color: "black" }}>{item.title}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    </TouchableWithoutFeedback>
                                )}
                            </View>

                            {/* Filter */}
                            <View style={{ flexDirection: "row", margin: 10, marginBottom: 0, zIndex: -1 }}>
                                <View style={ItemCateStyles.statsContainer}>
                                    <View style={ItemCateStyles.statBox}>
                                        <Text style={ItemCateStyles.statLabel}>All</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={ItemCateStyles.statBox}>
                                            <Text style={ItemCateStyles.statLabel}>Active</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={ItemCateStyles.statBox}>
                                            <Text style={ItemCateStyles.statLabel}>Inactive</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={ItemCateStyles.statBox}>
                                            <Image source={image1} style={ItemCateStyles.statedit} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Collection List */}
                            {
                                books.slice(0, display).map(item => (
                                    <TouchableOpacity key={item.id} style={{ zIndex: -1 }}>
                                        <View style={ItemCateStyles.item}>
                                            <Image source={img} style={{ width: 50, height: 70, marginRight: 10 }} />
                                            <View style={{ width: "85%" }}>
                                                <Text style={ItemCateStyles.title}>{item.title}</Text>

                                                <View style={ItemCateStyles.IcEditContainer}>
                                                    <Text style={ItemCateStyles.products}>{item.products} Items</Text>
                                                    <View style={ItemCateStyles.editBtnContainer}>
                                                        <TouchableOpacity >
                                                            <Image source={IcEdit} style={ItemCateStyles.editIcon} />
                                                        </TouchableOpacity>

                                                        <TouchableOpacity>
                                                            {item.status ? <Text style={[ItemCateStyles.actionBtn, { color: "#d4edda", backgroundColor: "#155724" }]} >Active</Text> : <Text style={[ItemCateStyles.actionBtn, { backgroundColor: "#721c24", color: "#f8d7da" }]}>Inactive</Text>}
                                                        </TouchableOpacity>

                                                        <TouchableOpacity onPress={() => { setPopup(true); getId(item.id) }}>
                                                            <Image source={IcStop} style={ItemCateStyles.editIcon} />
                                                        </TouchableOpacity>

                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                        </View>

                        <Modal
                            visible={popup}
                            animationType="slide"
                            onRequestClose={() => setPopup(false)}
                            transparent={true}
                        >
                            <View style={ItemCateStyles.modalSt}>
                                <View style={ItemCateStyles.modalInner}>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={ItemCateStyles.modalMessage}>Are You sure want to Delete the Product !</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", margin: 10, marginTop: 0 }}>
                                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => setPopup(false)}>
                                            <Text style={[ItemCateStyles.modalBtn, { color: "grey" }]}>cancel</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { setPopup(false); handlePopup() }}>
                                            <Text style={ItemCateStyles.modalBtn}>Okay</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        {loading && <ActivityIndicator size="small" />}
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>
    );
}


export { ItemMain }
