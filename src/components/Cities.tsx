import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { deleteCity } from "../redux/cities"
import { City } from "../interfaces"

export default function Cities({ openModal }: { openModal: () => void }) {
  const [isInEditMode, setIsInEditMode] = useState<boolean>(false)

  const cities = useSelector<RootState, City[]>((state) => state.cities.cities)
  const dispatch = useDispatch()

  return (
    <div className="row-span-2 flex flex-col animate-float-in bg-white shadow-normal rounded-primary gap-2 py-5 px-6 lg:px-8">
      <header className="flex items-center justify-between">
        <h3 className="text-3xl lg:text-4xl">Cities</h3>
        <button
          className="opacity-50 hover:opacity-100 transition-all"
          onClick={() => setIsInEditMode(!isInEditMode)}>
          <img src="svg/edit.svg" alt="edit" className="w-5 h-5" />
        </button>
      </header>
      <hr className="mb-2" />
      <div className="flex flex-col gap-5">
        {cities &&
          cities.map((city, index) => (
            <div
              className="flex items-center bg-background rounded-primary gap-2 py-3 px-6 xl:py-4 xl:px-8 text-2xl lg:text-3xl"
              key={index}>
              <p>
                {city.name}
                {"  "}
                <span className="text-base lg:text-lg opacity-50">
                  {city.country}
                </span>
              </p>
              {!isInEditMode ? (
                <p className="ml-auto">
                  {Math.sign(city.temperature as number) === 1 && "+"}
                  {city.temperature}°
                </p>
              ) : (
                <button
                  className={`
                  ${cities.length === 1 && "hidden"}
                  ml-auto opacity-50 hover:opacity-100 transition-all`}
                  onClick={() => dispatch(deleteCity(city))}>
                  <img src="svg/delete.svg" alt="delete" className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        {cities.length < 7 && (
          <button
            className="flex items-center justify-center rounded-primary border-2 border-dashed border-gray-500 gap-10 py-3 px-6 lg:py-4 lg:px-8 opacity-60 hover:opacity-100 transition-all"
            onClick={() => openModal()}>
            <p className="text-2xl lg:text-3xl">Add +</p>
          </button>
        )}
      </div>
    </div>
  )
}
