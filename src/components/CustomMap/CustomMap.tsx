import { GoogleMap, MarkerClusterer, useLoadScript } from '@react-google-maps/api'
import React, { useEffect, useState } from 'react'

import { PhonesResponse } from '../../utils/types/phones.types'
import { CustomMarker } from '../CustomMarker/CustomMarker'
import { CustomMapProps } from './CustomMap.types'

export const CustomMap = ({ speed, selectedStatuses }: CustomMapProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: ''
  })

  const [apiData, setApiData] = useState<PhonesResponse>()

  useEffect(() => {
    fetch('https://phones-enigma.herokuapp.com/items')
      .then(async (res) => await res.json())
      .then((data) => {
        setApiData(data as PhonesResponse)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error:', error)
      })
  }, [])

  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap
      zoom={4}
      center={{ lat: 7.959463, lng: 9.35654 }}
      mapContainerClassName="map-container"
    >
      <MarkerClusterer>
        {(clusterer) => (
          <div>
            {apiData?.data
              .filter(
                (data) =>
                  Number(data.last_speed) >= speed[0] &&
                  Number(data.last_speed) <= speed[1] &&
                  selectedStatuses[data.last_status]
              )
              .map((location) => (
                <CustomMarker
                  key={location.id}
                  clusterer={clusterer}
                  {...location}
                />
              ))}
          </div>
        )}
      </MarkerClusterer>
    </GoogleMap>
  )
}
