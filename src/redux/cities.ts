import { createSlice } from "@reduxjs/toolkit"
import { City } from "../interfaces"

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: (JSON.parse(localStorage.getItem("cities") as string) || []) as City[]
  },
  reducers: {
    addCity: (state, { payload }) => {
      payload.temperature = 1
      state.cities.push(payload)
      localStorage.setItem("cities", JSON.stringify(state.cities))
    },
    deleteCity: (state, { payload }) => {
      const index = state.cities.findIndex((city) => (
        city.longitude === payload.longitude && city.latitude === payload.latitude
      ))

      if (index === -1) return

      state.cities.splice(index, 1)
      localStorage.setItem("cities", JSON.stringify(state.cities))
    }
  }
})

export const { addCity, deleteCity } = citiesSlice.actions

export default citiesSlice.reducer