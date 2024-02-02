interface Geometry {
  type: string
  coordinates: number[]
}

export interface Properties {
  name: string
  feature_type: string
  maki: string
  place_formatted: string
  mapbox_id: string
  language: string
  metadata: object
  coordinates: { latitude: number, longitude: number }
  bbox: number[]
  context: object
}

export interface CitySearch {
  type: string
  geometry: Geometry
  properties: Properties
}