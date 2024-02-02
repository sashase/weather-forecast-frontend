import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { addCity } from "../redux/cities"
import { City, CitySearch } from "../interfaces"

export default function CityItem({ city }: { city: CitySearch }) {
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
      <div className="flex flex-col">
        <p>{city.properties.name}</p>
        <p className="text-base opacity-50">
          {/* Removing country name */}
          {city.properties.place_formatted.split(",")[0]}{" "}
        </p>
      </div>
      {cityIsAdded(
        city.properties.coordinates.latitude,
        city.properties.coordinates.longitude
      ) ? (
        <button className="opacity-60 ml-auto cursor-default">
          <img src="svg/check.svg" alt="city-check" className="w-5 h-5" />
        </button>
      ) : (
        <button
          className="opacity-60 hover:opacity-100 transition-all ml-auto"
          onClick={() => dispatch(addCity(city.properties))}>
          <img src="svg/plus.svg" alt="city-add" className="w-5 h-5" />
        </button>
      )}
    </li>
  )
}
