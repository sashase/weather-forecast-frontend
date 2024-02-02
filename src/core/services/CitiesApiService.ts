import { AxiosResponse } from "axios"
import ApiService from "./ApiService"
import { CitySearch } from "../../interfaces"

class CitiesApiService extends ApiService {
  public static async getSuggestions(query: string): Promise<AxiosResponse<{ features: CitySearch[] }>> {
    const request = this.axiosInstance.get(`${import.meta.env.VITE_CITIES_API_URL}?q=${query}&country=UA&types=city&language=uk&limit=10&access_token=${import.meta.env.VITE_CITIES_API_ACCESS_TOKEN}`)
    return this.requestHandler(request)
  }
}

export default CitiesApiService
