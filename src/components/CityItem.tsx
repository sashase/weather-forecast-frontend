import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { addCity } from "../redux/cities"
import { City } from "../interfaces"

export default function CityItem({ city }: { city: City }) {
  const cities = useSelector<RootState, City[]>((state) => state.cities.cities)
  const dispatch = useDispatch()

  const cityIsAdded = (latitude: number, longitude: number): boolean => {
    const index = cities.findIndex(
      (city) => city.latitude === latitude && city.longitude === longitude
    )
    return index !== -1
  }

  return (
    <li className="w-full flex gap-2 items-center px-4 py-2 text-base lg:text-lg 2xl:text-xl">
      <span>{city.name}</span>
      <img
        src={`svg/flags/${city.country.toLowerCase()}.svg`}
        alt="country-flag"
        className="w-5 h-5"
      />
      {cityIsAdded(city.latitude, city.longitude) ? (
        <button className="opacity-60 ml-auto cursor-default">
          <img src="svg/check.svg" alt="city-check" className="w-5 h-5" />
        </button>
      ) : (
        <button
          className="opacity-60 hover:opacity-100 transition-all ml-auto"
          onClick={() => dispatch(addCity(city))}>
          <img src="svg/plus.svg" alt="city-add" className="w-5 h-5" />
        </button>
      )}
    </li>
  )
}
