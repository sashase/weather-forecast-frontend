import { configureStore } from "@reduxjs/toolkit"
import citiesReducer from "./cities"

const store = configureStore({
  reducer: {
    cities: citiesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store