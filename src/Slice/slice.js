import { createSlice } from "@reduxjs/toolkit";

const FoodCardSlice = createSlice({
  name:'foodcard',
  initialState:{
    FoodcardList:[]
  },
  reducers:{
    addToCart(state,action){

    },
    deleteFromCart(state,action){

    },
    addReviewtoList(state,action){

    }
  }
})

export const{addToCart,deleteFromCart, addReviewtoList} = FoodCardSlice.actions
export default FoodCardSlice.reducer