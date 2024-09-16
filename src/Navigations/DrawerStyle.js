import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    row: {

    },
    pages:{
        // borderRadius:20,
        backgroundColor:"#F3D0D7",
        color:"#F6F5F2",
        marginBottom:10
    },
    route:{
        fontSize:17,
        color:"#F6F5F2",
    },
    list:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:5,
        marginVertical:6,
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:"#00A688",
        borderRadius:5,
    },
    LiteList:{
        marginLeft:15,
        marginRight:10,
        marginVertical:7,
        // backgroundColor:"red"
    },
    ListListText:{
        borderBottomColor:"grey",
        borderBottomWidth:1,
        color:"grey"
    }
})

export { styles }