import axios, { type AxiosInstance, type AxiosResponse, type AxiosError } from "axios"

class ApiService {
  protected static axiosInstance: AxiosInstance

  public static init() {
    this.axiosInstance = axios.create({
      headers: {
        Accept: "application/json",
      },
    })
  }

  protected static async requestHandler(
    request: Promise<AxiosResponse>
  ): Promise<AxiosResponse> {
    try {
      return await request
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw this.errorHandler(error)
      }
      throw error // If error is not an AxiosError, rethrow it immediately
    }
  }

  protected static errorHandler(error: AxiosError) {
    if (error.response?.data) throw error.response?.data
    throw error
  }
}

export default ApiService
