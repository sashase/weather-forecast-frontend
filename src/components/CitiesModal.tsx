import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import CitiesApiService from "../core/services/CitiesApiService"
import { City } from "../interfaces"
import CityItem from "./CityItem"
import CityItemsSkeleton from "./CityItemsSkeleton"

export default function CitiesModal({
  closeModal
}: {
  closeModal: () => void
}) {
  const numberOfCities = useSelector<RootState, number>(
    (state) => state.cities.cities.length
  )

  const [query, setQuery] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [suggestions, setSuggestions] = useState<City[]>()

  const popupRef = useRef<HTMLDivElement>(null)

  const handleOutsideClick = ({ target }: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(target as Node)) {
      closeModal()
    }
  }

  useEffect(() => {
    if (numberOfCities === 7) return

    const debounce = setTimeout(async () => {
      if (!query) return setSuggestions([])

      setLoading(true)

      const { data } = await CitiesApiService.getSuggestions(query)
      setSuggestions(data)

      setLoading(false)
    }, 400)

    return () => clearTimeout(debounce)
  }, [query])

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = ""
    }
  })

  return (
    <div className="animate-fade-in fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div
        ref={popupRef}
        className="max-h-[90%] max-w-[90%] bg-white px-7 pt-6 pb-8 rounded-3xl flex flex-col items-center justify-center gap-4">
        <h3 className="self-start text-3xl lg:text-4xl">Search</h3>
        <hr className="mb-2 w-full" />
        <input
          type="search"
          value={query}
          placeholder="City name"
          onChange={({ target }) => setQuery(target.value)}
          className="w-full rounded-primary px-4 py-2 bg-background text-lg lg:text-xl 2xl:text-2xl"
        />
        {numberOfCities < 7 ? (
          loading ? (
            <CityItemsSkeleton />
          ) : (
            <ul className="w-full flex flex-col bg-background rounded-xl">
              {suggestions &&
                suggestions.map((city, i) => (
                  <div key={i}>
                    {i !== 0 && <hr />}
                    <CityItem city={city} />
                  </div>
                ))}
            </ul>
          )
        ) : (
          <p className="max-w-72 text-red-500 px-4 py-2 text-lg lg:text-xl 2xl:text-2xl">
            The maximum number of cities has been added.
          </p>
        )}
      </div>
    </div>
  )
}
