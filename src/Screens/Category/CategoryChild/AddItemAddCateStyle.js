import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 5,
        paddingBottom: 10,
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

    formGroup11: {
        flexDirection: "row",
        // marginVertical: ,
        // zIndex: -1,
        marginBottom: 10,
        justifyContent: "space-between"
    },
    checkContainer: {
        marginBottom: 10,
        alignItems: "center",
        marginTop:10,
        flexDirection: "row",
    },
    checklabel: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    checkBox: {
        width: 15,
        height: 15,
        marginLeft: 5,
    },

    // search suggestion
    flexSearch:{
        flexDirection:"row",
        alignItems:"center",
          borderBottomWidth:1,
        borderColor:"grey"
    },
    SearchIc:{
        width:20,
        height:20,
        marginRight:5,
        borderBottomWidth:1,
        borderColor:"grey"
    },
    searchCate:{
        fontSize:14,
        color:"black"
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
        marginBottom: 10,
        // zIndex:-1,
    },
    catLable: {
        width: "45%"
    },
    catLablee: {
        marginBottom: 10,
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
        // borderRadius: 6,
        padding: 10,
        marginVertical: 1,
        color: 'black',
        backgroundColor: "#FFF",
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
        position: "absolute",
        zIndex:100,
        elevation:50,
        width: "100%",
        backgroundColor: "white",
        marginTop: 5,
        top: 75,
        elevation:3,
        padding: 10,
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

export { styles }