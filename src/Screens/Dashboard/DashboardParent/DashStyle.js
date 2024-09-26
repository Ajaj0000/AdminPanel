import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    // dashboard header

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 13,
        paddingHorizontal:15,
        elevation: 5,
        backgroundColor: "#FFF",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        // borderBottomWidth:1,
    },
    navbar:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    logo:{
        backgroundColor:"#86c5d8",
        color:"black",
        marginRight:5,
        width:35,
        padding:4,
        borderRadius:5
    },
    headerText: {
        color: "black",
        fontWeight: "500",
        fontSize: 23,
        marginLeft:4,
    },
    profile: {
        width: 30,
        height: 30,
    },
    topCont: {
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 10,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 8,
    },
    topBox: {
        alignItems: "center",
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
        elevation: 5
    },
    filterItem: {
        fontSize: 14,
        color: "#888",
    },
    container: {
        // flex: 1,
        padding: 6,
        backgroundColor: 'white',

    },

    // state container

    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    card: {
        flex: 1,
        marginHorizontal: 5,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statsContainer: {
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: 20,
        margin: "auto",
    },
    stateContainerBox: {
        flexDirection: "row",
    },
    statBox: {
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        margin: 5,
        width: 150,
        height: 80,
        elevation: 1,
        // borderRadius:5,
        shadowColor: '#000', // iOS
        shadowOffset: { width: 0, height: 2 }, // iOS
        shadowOpacity: 0.25, // iOS
        shadowRadius: 3.84, // iOS
        borderBottomEndRadius: 8,
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        borderBottomStartRadius:7,
        // borderLeftColor:"red",
        borderLeftWidth:5
    },
    statLabel: {
        fontSize: 14,
        color: "black",
    },
    statValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        // marginVertical: 5,
    },
    statChange: {
        fontSize: 12,
        color: '#888',
    },
    chart: {
        marginVertical: 8,
        borderRadius: 8,
    },
    chartContainer: {
        // paddingHorizontal: 10,
        marginHorizontal:10,
        justifyContent:"center"
    }
});

export { styles }