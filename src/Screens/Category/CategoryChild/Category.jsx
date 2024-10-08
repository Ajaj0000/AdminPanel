import React, { useEffect, useRef, useState, } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import { ItemCateStyles } from "./ItemCateStyle";
import icSort from '../../../Assets/Icons/funnel.png';
import image1 from "../../../Assets/Icons/bin.png";
import IcEdit from '../../../Assets/Icons/edit.png';
import IcStop from '../../../Assets/Icons/binRed.png';
import IcSearch from '../../../Assets/Icons/search.png';
import IcRestore from '../../../Assets/Icons/history.png';
import { useSelector } from "react-redux";
import { ModalPopUp } from "../../../CommonScreens/ModalPopUp";

function Category({ handelNav }) {

    const token = useSelector((state) => state.Token.value.accessToken);
    console.log(token, 'koken')
    const [getCategroyItems, setCategoryItems] = useState([]);
    const [filterItems, setFilterItems] = useState([...getCategroyItems]);
    const [type, setType] = useState('ALL');

    // category list data;
    const DataList = async (listType) => {
        try {
            const response = await fetch(`http://172.22.128.1:8036/ops/category/list`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    listType: listType
                })
            })

            if (response.ok) {
                const getRes = await response.json();
                setCategoryItems(getRes.responsePacket);
                setFilterItems(getRes.responsePacket);
                // console.log(getRes.responsePacket);
            };

        } catch (e) {
            console.log(e, 'error in category api')
        }
    };

    useEffect(() => {
        DataList('ALL');
    }, []);

    // search list items
    const searchItems = (text) => {
        const filter = getCategroyItems.filter((item) =>
            item.categoryName.toLowerCase().includes(text.toLowerCase()) || item.description.toLowerCase().includes(text.toLowerCase())).sort((a, b) => a.categoryName.localeCompare(b.categoryName));
        setFilterItems(filter);
    };

    const [recordedId, setRecordedId] = useState();

    // inactivate items
    const inactivate = async (id) => {
        try {
            const response = await fetch(`http://172.22.128.1:8036/ops/category/deactivate/${id}`, {
                method: "PUT",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    // 'Content-Type': 'application/json'
                },

            });
            const getRes = await response.json();
            console.log(getRes, 'inactive api');
            if (response.ok) {
                switch (type) {
                    case 'ALL':
                        DataList('ALL');
                        break;
                    case 'INACTIVE':
                        DataList('INACTIVE');
                        break;
                    case 'ACTIVE':
                        DataList('ACTIVE');
                        break;
                    case 'DELETED':
                        DataList('DELETED')
                        break;
                    default:
                        console.log('no scuh filter available')
                }
            } else {
                console.log('error in responce')
            }

        } catch (e) {
            console.log(e, 'error in inactive api')
        }

    }

    const confirmInactive = (id) => {
        setRecordedId(id);
        setAction('Deactivate');
        setAlertBar(true);
    };

    // activate
    const activate = async (id) => {
        try {
            const response = await fetch(`http://172.22.128.1:8036/ops/category/activate/${id}`, {
                method: "PUT",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },

            })

            if (response.ok) {
                switch (type) {
                    case 'ALL':
                        DataList('ALL');
                        break;
                    case 'INACTIVE':
                        DataList('INACTIVE');
                        break;
                    case 'ACTIVE':
                        DataList('ACTIVE');
                        break;
                    case 'DELETED':
                        DataList('DELETED')
                        break;
                    default:
                        console.log('no scuh filter available')
                }
            } else {
                console.log('error in responce')
            }
            const getRes = await response.json();
            console.log(getRes, 'active api');
        } catch (e) {
            console.log(e, 'error in active api')
        }

    }

    const confirmActive = (id) => {
        setRecordedId(id)
        setAction('Activate');
        setAlertBar(true);
    };


    // delete api
    const deleteList = async (id) => {
        try {
            const res = await fetch(`http://172.22.128.1:8036/ops/category/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (res.ok) {
                switch (type) {
                    case 'ALL':
                        DataList('ALL');
                        break;
                    case 'INACTIVE':
                        DataList('INACTIVE');
                        break;
                    case 'ACTIVE':
                        DataList('ACTIVE');
                        break;
                    case 'DELETED':
                        DataList('DELETED')
                        break;
                    default:
                        console.log('no scuh filter available')
                }
            } else {
                console.log('error in responce')
            };

            const getRes = await res.json();
            console.log(getRes, 'deleted')
        } catch (e) {
            console.log(e, 'error in deleted api')
        }
    };

    const confirmDelete = (id) => {
        setRecordedId(id)
        setAction('Delete');
        setAlertBar(true);
    };


    // revive delete items 
    const restore = async (id) => {
        try {
            const res = await fetch(`http://172.22.128.1:8036/ops/category/revive/${id}`, {
                method: "PUT",
                headers: {
                    'Authorization': `Bearer ${token}`,
                },

            });

            const getRes = await res.json();
            if (res.ok) {
                switch (type) {
                    case 'ALL':
                        DataList('ALL');
                        break;
                    case 'INACTIVE':
                        DataList('INACTIVE');
                        break;
                    case 'ACTIVE':
                        DataList('ACTIVE');
                        break;
                    case 'DELETED':
                        DataList('DELETED')
                        break;
                    default:
                        console.log('no scuh filter available')
                }
            } else {
                console.log('error in responce')
            };
            console.log('restore', getRes);

        } catch (e) {
            console.log(e, 'error in restore api');
        }

    };

    const confirmRestore = (id) => {
        setRecordedId(id);
        setAction('Restore');
        setAlertBar(true)
    };

    // popup 
    const [alertBar, setAlertBar] = useState(false);
    const [action, setAction] = useState();


    const confirmAction = () => {
        if (alertBar) {
            switch (action) {
                case 'Activate':
                    activate(recordedId);
                    break;
                case 'Delete':
                    deleteList(recordedId);
                    break;
                case 'Deactivate':
                    inactivate(recordedId);
                    break;
                case 'Restore':
                    restore(recordedId);
                default:
                    console.log('no such action available')
            };
        }
        setAlertBar(false);
        setAction('');
    };
    const closePopUp = () => {
        setAlertBar(false);
        setAction('');
    };


    const refSort = useRef(null);
    const [display, setDisplay] = useState(5);
    const [loading, setLoading] = useState(false);
    const scrollViewRef = useRef(null);

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



    // sort function
    const sortBy = [
        { title: "A-Z" },
        { title: "Z-A" },
        { title: "Unavailable" },
        { title: "Committed" },
        { title: "Available" },
    ];
    const [modalVisible, setModalVisible] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const [selectOption, setSelectOption] = useState(...sortOption);
    console.log(selectOption, 'selectedOptioon');

    const handleFilter = (e) => {
        setSortOption(e);
        setSelectOption(e);
        if (e === 'A-Z') {
            const filter = filterItems.sort((a, b) => a.categoryName.localeCompare(b.categoryName))
            setFilterItems(filter);
            console.log('filter by A-Z');

        } else if (e === 'Z-A') {
            const filter = filterItems.sort((a, b) => b.categoryName.localeCompare(a.categoryName))
            setFilterItems(filter)
            console.log('filter by Z-A');

        } else if (e === 'Unavailable') {
            DataList('INACTIVE');
            setType('INACTIVE');
            console.log('filter by UNACTIBVE');

        } else if (e === 'Available') {
            DataList('ACTIVE');
            setType('ACTIVE');
            console.log('filter by AVAilable');

        } else if (e === 'Committed') {
            DataList('DELETED');
            setType('DELETED');
            console.log('filter by -DELETED');
        }
        setSelectOption('');
    };



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
                                <Text style={ItemCateStyles.order}>Category List</Text>
                                <TouchableOpacity onPress={handelNav}>
                                    <View style={ItemCateStyles.actionBox}>
                                        <Text style={ItemCateStyles.create}>Add Category</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* Search Input Section */}
                            <View style={ItemCateStyles.searchContainer}>
                                <Image source={IcSearch} style={ItemCateStyles.searchIcImg} />
                                <TextInput
                                    style={ItemCateStyles.searchInput}
                                    placeholder="Searching all collections"
                                    placeholderTextColor="grey"
                                    onChangeText={(text) => searchItems(text)}
                                />
                                <View style={ItemCateStyles.sortBox}>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        <View>
                                            <Image source={icSort} style={ItemCateStyles.statLabell} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* sort section */}
                                {
                                    modalVisible && (
                                        <TouchableWithoutFeedback onPress={() => { }}>
                                            <View style={ItemCateStyles.sortSection} ref={refSort}>
                                                <Text>Sort By</Text>
                                                {
                                                    sortBy.map((item, index) => (
                                                        <TouchableOpacity key={index} onPress={() => { handleFilter(item.title); setModalVisible(false); }}>
                                                            <View style={ItemCateStyles.radioCheck}>
                                                                <View style={ItemCateStyles.radioOuter}>
                                                                    <View style={[ItemCateStyles.radioInner, { backgroundColor: sortOption === item.title ? 'black' : 'white' }]}></View>
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
                                    <View style={[ItemCateStyles.statBox, { backgroundColor: type === 'ALL' ? "#BBBBBB" : "white" }]}>
                                        <Text style={ItemCateStyles.statLabel} onPress={() => { DataList('ALL'); setType('ALL'); setSortOption('') }}>All</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={[ItemCateStyles.statBox, { backgroundColor: type === 'ACTIVE' ? "#BBBBBB" : "white" }]}>
                                            <Text style={ItemCateStyles.statLabel} onPress={() => { DataList('ACTIVE'); setType('ACTIVE'); setSortOption('') }}>Active</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[ItemCateStyles.statBox, { backgroundColor: type === 'INACTIVE' ? "#BBBBBB" : "white" }]}>
                                            <Text style={ItemCateStyles.statLabel} onPress={() => { DataList('INACTIVE'); setType('INACTIVE'); setSortOption('') }}>Inactive</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[ItemCateStyles.statBox, { backgroundColor: type === 'DELETED' ? "#BBBBBB" : "white" }]}>
                                            <TouchableOpacity onPress={() => { DataList('DELETED'); setType('DELETED'); setSortOption('') }}>
                                                <Image source={image1} style={[ItemCateStyles.statedit, { backgroundColor: type === 'DELETED' ? "#BBBBBB" : "white" }]} />
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Collection List */}
                            {
                                filterItems.slice(0, display).map(item => (

                                    <TouchableOpacity key={item.id} style={{ zIndex: -1 }}>
                                        <View style={ItemCateStyles.item}>
                                            <Image source={{ uri: item.categoryIconRefId }} style={{ width: 50, height: 70, marginRight: 10 }} />
                                            <View style={{ width: "85%" }}>
                                                <Text style={ItemCateStyles.title}>{item.categoryName}</Text>

                                                <View style={ItemCateStyles.IcEditContainer}>
                                                    <Text style={ItemCateStyles.products}>Items</Text>
                                                    <View style={ItemCateStyles.editBtnContainer}>

                                                        <TouchableOpacity>
                                                            {item.isActive ? <Text style={[ItemCateStyles.actionBtn, { color: "#d4edda", backgroundColor: "#155724" }]} onPress={() => { confirmInactive(item.categoryId) }} >Active</Text> : <Text style={[ItemCateStyles.actionBtn, { backgroundColor: "#721c24", color: "#f8d7da" }]} onPress={() => { confirmActive(item.categoryId) }} >Inactive</Text>}
                                                        </TouchableOpacity>

                                                        <TouchableOpacity >
                                                            <Image source={IcEdit} style={ItemCateStyles.editIcon} />
                                                        </TouchableOpacity>

                                                        {
                                                            item.deleted ?
                                                                <TouchableOpacity onPress={() => { confirmRestore(item.categoryId) }}>
                                                                    <Image source={IcRestore} style={ItemCateStyles.editIcon} />
                                                                </TouchableOpacity>
                                                                :
                                                                <TouchableOpacity onPress={() => { confirmDelete(item.categoryId) }}>
                                                                    <Image source={IcStop} style={ItemCateStyles.editIcon} />
                                                                </TouchableOpacity>
                                                        }

                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                    </TouchableOpacity>

                                ))}
                        </View>


                        {loading && <ActivityIndicator size="small" />}
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>

            {/* confirm the  */}
            <ModalPopUp
                isOpen={alertBar}
                action={`Are you sure you want to ${action} this item ?`}
                confirm={confirmAction}
                cancel={closePopUp}
            />

        </>
    );
}


export { Category }
