import React from "react";
import { ItemMain } from "../ItemChild/ItemMain";

function ItemParent(props) {
    
    return (
        <>
            <ItemMain handle={() => props.navigation.navigate("AddItem")} />
        </>
    )
}
export { ItemParent }