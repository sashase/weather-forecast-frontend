import { useState } from "react"
import Cities from "./components/Cities"
import Forecast from "./components/Forecast"
import Current from "./components/Current"
import CitiesModal from "./components/CitiesModal"

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="font-rubik font-normal grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-y-5 md:gap-x-5 w-11/12 lg:w-5/6 my-10 mx-auto">
      <Current />
      <Forecast />
      <Cities openModal={() => setIsModalOpen(true)} />
      {isModalOpen && <CitiesModal closeModal={() => setIsModalOpen(false)} />}
    </div>
  )
}
