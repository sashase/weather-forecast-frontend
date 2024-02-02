import { AxiosResponse } from "axios"
import ApiService from "./ApiService"

class WeatherApiService extends ApiService {
  public static async getForecast(lat: number, lon: number): Promise<AxiosResponse> {
    const request = this.axiosInstance.get(`${import.meta.env.VITE_WEATHER_API_URL}/?forecast/predict?latitude=${lat}&longitude=${lon}&day=${new Date().toISOString().split("T")[0]}`)
    return this.requestHandler(request)
  }
}

export default WeatherApiService
