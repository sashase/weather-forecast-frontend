import { current } from "../data/mock"

export default function Current() {
  return (
    <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 md:gap-5 py-5 px-8 animate-float-in bg-white shadow-normal rounded-primary text-3xl lg:text-4xl 2xl:text-5xl">
      <div className="flex flex-col gap-3 md:col-span-2">
        <h3 className="text-4xl 2xl:text-5xl">
          Kyiv{" "}
          <span className="text-lg lg:text-xl 2xl:text-2xl opacity-50">
            Ukraine
          </span>
        </h3>
        <hr className="mb-4" />
        <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-5 2xl:gap-20">
          <div>
            <p>-2°</p>
            <p className="text-lg lg:text-xl 2xl:text-2xl opacity-50">
              Temperature
            </p>
          </div>
          <div>
            <p>80%</p>
            <p className="text-lg lg:text-xl 2xl:text-2xl opacity-50">
              Humidity
            </p>
          </div>
          <div>
            <p>2m/s</p>
            <p className="text-lg lg:text-xl 2xl:text-2xl opacity-50">Wind</p>
          </div>
        </div>
      </div>
      <img src="svg/cloudy.svg" alt="cloudy" className="w-36 m-auto" />
      <div className="col-span-3 flex items-center gap-2 lg:gap-5 mt-5 md:mt-0 overflow-auto">
        {current.map((hour) => (
          <div
            className="flex flex-col items-center rounded-primary gap-1 py-3 px-6 lg:px-7 bg-background text-lg"
            key={hour.date.getHours()}>
            <span className="opacity-50">{hour.date.getHours()}:00</span>
            <img
              src={`svg/${hour.condition}.svg`}
              alt={hour.condition}
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <span className="opacity-50">
              {Math.sign(hour.temperature) === 1 && "+"}
              {hour.temperature}°
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
