import { cities } from "../data/mock"
import NewCity from "./NewCity"

export default function Cities() {
  return (
    <div className="row-span-2 flex flex-col animate-float-in bg-white shadow-normal rounded-[45px] gap-2 py-5 px-6 lg:px-8">
      <header className="flex items-center justify-between">
        <h3 className="text-3xl lg:text-4xl">Cities</h3>
        <button className="opacity-50 hover:opacity-100 transition-all">
          <img src="svg/edit.svg" alt="edit" className="w-5 h-5" />
        </button>
      </header>
      <hr className="mb-2" />
      <div className="flex flex-col gap-5">
        {cities.map((city) => (
          <div
            className="flex items-center bg-background rounded-[45px] gap-2 py-3 px-6 xl:py-4 xl:px-8 text-2xl lg:text-3xl"
            key={city.name}>
            <p>
              {city.name}
              {"  "}
              <span className="text-base lg:text-lg opacity-50">
                {city.country}
              </span>
            </p>
            <p className="ml-auto">
              {Math.sign(city.temperature) === 1 && "+"}
              {city.temperature}°
            </p>
          </div>
        ))}
        <NewCity />
      </div>
    </div>
  )
}
