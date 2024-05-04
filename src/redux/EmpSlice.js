import { createSlice } from "@reduxjs/toolkit";

const empSlice = createSlice({
    name:'emp',
    initialState:{empObj:{firstName:"sumit",lastName:"Sharma"}},
    reducers:{
        setEmpObj : (state, action) => {
            console.log(state);
            console.log(action);
            state.empObj = action.payload;
        }
    }
});


export default empSlice.reducer;

export const {setEmpObj} = empSlice.actions;