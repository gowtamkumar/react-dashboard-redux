import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  customers: {}
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.customers = action.payload
    },
    handleReset: (state, action) => {
      state.customers = {}
    }
  }
})

export const { setCustomer, handleReset } = customerSlice.actions
export default customerSlice.reducer;