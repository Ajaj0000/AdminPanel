import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    topCont:{
        flexDirection:"row",
        marginBottom:10,
        justifyContent:"flex-start",
        alignItems:"flex-start",
        borderRadius: 8,
    },
    topBox:{
        alignItems:"center",
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
    },
    filterItem:{
        fontSize: 14,
        color: "#888",
    },
    container: {
        // flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        overflow:"scroll"
    },
    statBox: {
        alignItems:"center",
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
        width:200,
        height:80,
    },
    statLabel: {
        fontSize: 14,
        color: "#888",
    },
    statValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#888',
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
    chartContainer:{
        paddingHorizontal:10,
        
    }
});

export { styles }