import React from "react";
import { Button, Text, View } from "react-native";
import { Style } from "./Style";

function Home(props) {
    return (
        <>
            <View>
                <Text style={Style.head}>Home</Text>
                <Button title="Go to order" onPress={()=>props.navigation.navigate('Orders')}/>
            </View>
        </>
    )
}
export default Home