import { configureStore } from "@reduxjs/toolkit";
import Reducder from '../Slice/slice'
const store = configureStore({
  reducer : {
    foodCard : Reducder
  }
})

export default store;