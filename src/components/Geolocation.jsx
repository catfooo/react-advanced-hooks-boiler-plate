import { useGeolocation } from "../hooks/useGeolocation"

export const Geolocation = () => {

    const coordinates = useGeolocation()
  return (
    <div>
        <p>Latitude: { coordinates?.latitude}</p>
        <p>Longitude:{ coordinates?.longitude}</p>
    </div>
  )
}
