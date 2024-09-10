import React from "react";
import { StyleSheet, Text } from "react-native";

function Home() {

    const Style = StyleSheet.create({
        txe:{
            flex:1,
            textAlign:"center"
        }
})

    return (
        <>
            <Text style={Style.txe}></Text>
        </>
    )
}
export { Home }