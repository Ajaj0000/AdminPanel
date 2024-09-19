import React from "react";
import { Category } from "../CategoryChild/Category";

function CategoryParent(props) {
    return (
        <>
            <Category handelNav={()=>props.navigation.navigate('Add Category')}/>
        </>
    )
}
export { CategoryParent }