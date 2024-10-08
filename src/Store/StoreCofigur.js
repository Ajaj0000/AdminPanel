import { configureStore } from "@reduxjs/toolkit";
import Token from "./ReduxSlice";

const store = configureStore({
    reducer: { 
        Token:Token
    }
})
export { store }