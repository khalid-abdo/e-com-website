import { createSlice } from "@reduxjs/toolkit";




export const CartSlice = createSlice({
    initialState: [],
    name: "CartSlice",
    reducers: {
        addtoCart: (state, action) => {
            const findProudct = state.find((proudct)=>proudct.id===action.payload.id)
            if (findProudct) {
                findProudct.quantity +=1
            } else {
                const proudctclone = { ...action.payload, quantity: 1 }
                state.push(proudctclone)
            }
           
        },
        deletefromCart: (state, action) => {
            return state.filter((Proudct) => Proudct.id != action.payload.id)
        },
        Clear: (state, action) => {
            return []
         }
    }
})

export const { addtoCart, deletefromCart, Clear } = CartSlice.actions;
export default CartSlice.reducer;