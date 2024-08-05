import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    column: "",
    value: "",
    operator: ""
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDataState: (state, action) => {
            state.data = action.payload.data;
        },
        setOperatorState: (state, action) => {
            console.log("payload ",action.payload)   
            state.operator = action.payload.operator;
            console.log("finale1",state.operator)
        },
        setVlaueState: (state, action) => {
            state.value = action.payload.value;
            console.log("finale1",state.value)
        },
        setColumnState: (state, action) => {
            state.column = action.payload.column;
            console.log("finale1",state.column)
        }
    }
})

export const { setDataState, setColumnState, setOperatorState, setVlaueState } = dataSlice.actions;
export default dataSlice.reducer;