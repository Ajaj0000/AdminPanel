import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        accessToken: ''
    }
}

export const Token = createSlice({
    name: "Token",
    initialState,
    reducers: {
        IsAdmin: (state, action) => {
            state.value.accessToken = action.payload
        }
    }
})

export const { IsAdmin } = Token.actions;
export default Token.reducer