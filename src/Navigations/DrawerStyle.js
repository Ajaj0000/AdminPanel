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
        // backgroundColor:"#BBBBBB",
        color:"black",
        borderRadius:5,
    },
    LiteList:{
        // marginLeft:15,
        // marginRight:10,
        // marginVertical:7,
        // backgroundColor:"#4B83A7"
    },
    ListListText:{
        borderBottomColor:"grey",
        borderBottomWidth:1,
        color:"grey"
    },
    profile:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:10,
        marginVertical:10,
        backgroundColor:"#E5E5E5",
        borderRadius:10,
        padding:10
    },
    adminPic:{
        marginRight:10
    },
    adminName:{
        fontSize:20,
        fontWeight:"600",
        marginLeft:10
    }
})

export { styles }