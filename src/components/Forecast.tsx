import { forecast } from "../data/mock"

export default function Forecast() {
  return (
    <div className="row-start-2 col-span-2 animate-float-in bg-white shadow-normal rounded-[45px] flex flex-col gap-2 py-5 px-6 lg:px-8">
      <h3 className="text-3xl lg:text-4xl">Forecast</h3>
      <hr className="mb-4" />

      {/* Desktop Layout */}
      <div className="gap-5 hidden lg:flex lg:flex-col">
        {forecast.map((day) => (
          <div
            className="flex items-center rounded-[45px] gap-5 xl:gap-10 py-3 px-6 xl:py-4 xl:px-8 bg-background text-3xl"
            key={day.date.getDate()}>
            <img
              src={`svg/${day.condition}.svg`}
              alt={day.condition}
              className="w-16 h-16"
            />
            <div>
              <p>
                {Math.sign(day.temperature) === 1 && "+"}
                {day.temperature}°
              </p>
              <p className="text-lg opacity-50">Temperature</p>
            </div>
            <div>
              <p>{day.humidity}%</p>
              <p className="text-lg opacity-50">Humidity</p>
            </div>
            <div>
              <p>{day.wind}m/s</p>
              <p className="text-lg opacity-50">Wind</p>
            </div>
            <p className="ml-auto">
              {day.date.getDate()}
              {"  "}
              <span className="text-lg opacity-50">Jan</span>
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="gap-5 flex flex-col lg:hidden">
        {forecast.map((day) => (
          <div
            className="grid grid-cols-2 items-center rounded-[45px] py-3 px-6 bg-background"
            key={day.date.getDate()}>
            <div className="text-2xl">
              <p className="ml-auto">
                {day.date.getDate()}
                {"  "}
                <span className="text-base opacity-50">Jan</span>
              </p>
              <hr className="bg-gray-400 mt-1 mb-2" />
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-5">
                <div>
                  <p>
                    {Math.sign(day.temperature) === 1 && "+"}
                    {day.temperature}°
                  </p>
                  <p className="text-base opacity-50">Temperature</p>
                </div>
                <div>
                  <p>{day.humidity}%</p>
                  <p className="text-base opacity-50">Humidity</p>
                </div>
                <div>
                  <p>{day.wind}m/s</p>
                  <p className="text-base opacity-50">Wind</p>
                </div>
              </div>
            </div>
            <img
              src={`svg/${day.condition}.svg`}
              alt={day.condition}
              className="w-20 h-20 ml-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
