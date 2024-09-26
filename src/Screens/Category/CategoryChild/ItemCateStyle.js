import { StyleSheet } from "react-native";

const ItemCateStyles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "white"
    },
    // Header Container
    containerHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        alignItems: "center",
        // borderBottomColor: "#BBBBBB",
        // borderBottomWidth: 1,
        marginHorizontal: 10
    },
    order: {
        fontSize: 17,
        color: "black",
        fontWeight: "600"
    },
    actionBox: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: "center",
    },
    create: {
        backgroundColor: "black",
        color: "white",
        fontSize: 15,
        paddingHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 5,
    },
    // input..
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "#FFF",
        elevation: 2,
        marginTop:1,
    },
    searchIcImg: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    searchInput: {
        // elevation: 3,
        border: "none",
        padding: 10,
        color: 'black',
        // backgroundColor: "#FFF",
        flex: 2,
        height: 40,
        fontSize: 16,
        // paddingHorizontal: 10,
        marginHorizontal: 5,
    },
    saveAsButton: {
        paddingRight: 5,
        paddingVertical: 8,
    },
    saveAsText: {
        color: 'black', // Disabled text color
        fontSize: 16,
    },
    // Statistics Section
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        overflow: "scroll",
        alignItems: "center",
    },
    statBox: {
        alignItems: "center",
        backgroundColor: '#FFF',
        elevation: 2,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
        marginVertical: 1.2
    },
    statLabel: {
        fontSize: 14,
        textAlign: "center",
        // width: 30,
        color: "black",
        fontWeight: "500"
    },
    sortBox: {
        marginHorizontal: 7,
        height: 41,
        flexDirection: "row",
        alignItems: "center",
    },
    statBoxx: {
        alignItems: "center",
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 7,
        height: 41,
        flexDirection: "row"
    },
    statedit: {
        // paddingHorizontal: 6,
        backgroundColor: "#FFFFFF",
        width: 20,
        height: 20,
    },
    statLabell: {
        paddingHorizontal: 6,
        fontSize: 17,
        width: 20,
        height: 20,
        marginRight:5,
    },
    // Collection List Item
    item: {
        backgroundColor: "white",
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        flexDirection: "row",
        margin: 12,
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        width: 250,
        color: "black"
    },
    products: {
        fontSize: 14,
        color: '#777',
    },
    // sort section 
    sortSection: {
        position: "absolute",
        top: 37,
        right: -7,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        zIndex: 30,
        elevation: 2,
    },
    radioCheck: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 5,
        padding: 4,
        margin: 4
    },
    radioOuter: {
        borderRadius: 40,
        width: 15,
        height: 15,
        margin: 5,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    radioInner: {
        borderRadius: 40,
        width: 10,
        height: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
    },
    editIcon: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
        marginTop: 5,
        justifyContent: "center",
        overflow: "visible"
    },
    IcEditContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    editBtnContainer: {
        flexDirection: "row",
        marginHorizontal: 5,
        marginTop: 5,
        alignItems: "center",
    },
    actionBtn: {
        margin: 3,
        fontWeight: "600",
        padding: 4,
        borderRadius: 10,
        width: 60,
        textAlign: "center",
        marginTop: 5,
    }
});

export { ItemCateStyles }