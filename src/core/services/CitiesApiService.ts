import { AxiosResponse } from "axios"
import ApiService from "./ApiService"

class CitiesApiService extends ApiService {
  public static async getSuggestions(query: string): Promise<AxiosResponse> {
    const request = this.axiosInstance.get(`${import.meta.env.VITE_CITIES_API_URL}/?name=${query}&limit=5`, {
      headers: {
        "x-api-key": import.meta.env.VITE_CITIES_API_KEY
      }
    })
    return this.requestHandler(request)
  }
}

export default CitiesApiService
