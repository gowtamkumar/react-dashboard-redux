import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './features/Customer/CustomerSlice'

const store = configureStore({
  reducer: {
    customer: customerReducer,
  }
})

export default store;