import { createSlice } from "@reduxjs/toolkit"
import { City, Properties } from "../interfaces"

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: (JSON.parse(localStorage.getItem("cities") as string) || []) as City[]
  },
  reducers: {
    addCity: (state, { payload }: { payload: Properties }) => {
      const city: City = {
        name: payload.name,
        region: payload.place_formatted.split(",")[0],
        latitude: payload.coordinates.latitude,
        longitude: payload.coordinates.longitude,
        temperature: 1  // test
      }
      state.cities.push(city)
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