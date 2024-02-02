import { createSlice } from "@reduxjs/toolkit"
import { City } from "../interfaces"

export const selectedCitySlice = createSlice({
  name: "selectedCity",
  initialState: {
    selectedCity: (JSON.parse(localStorage.getItem("selectedCity") as string) || []) as City
  },
  reducers: {
    selectCity: (state, { payload }) => {
      state.selectedCity = payload
      localStorage.setItem("selectedCity", JSON.stringify(state.selectedCity))
    },
  }
})

export const { selectCity } = selectedCitySlice.actions

export default selectedCitySlice.reducer