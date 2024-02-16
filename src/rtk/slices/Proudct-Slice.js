import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProudcts = createAsyncThunk('ProudctSlice/fetchProudcts', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})

export const ProudctSlice = createSlice({
    initialState: [],
    name: 'ProudctSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProudcts.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const { } = ProudctSlice.actions;
export default ProudctSlice.reducer