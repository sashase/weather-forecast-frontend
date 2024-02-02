import { configureStore } from "@reduxjs/toolkit"
import citiesReducer from "./cities"
import selectedCityReducer from "./selected-city"

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    selectedCity: selectedCityReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store