import { GoogleMap, MarkerClusterer, useLoadScript } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';

import { PhoneStatusEnum, PhonesResponse } from '../../utils/types/phones.types';
import { CustomMarker } from '../CustomMarker/CustomMarker';
import { CustomMapProps } from './CustomMap.types';

export const CustomMap = ({ speed, selectedStatuses }: CustomMapProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD1yxKqDn4h5cNvzqDYoT7WSENAOAo9IiA',
  });

  const [apiData, setApiData] = useState<PhonesResponse>();

  useEffect(() => {
    fetch('https://phones-enigma.herokuapp.com/items')
      .then((res) => res.json())
      .then((data) => {
        setApiData(data as PhonesResponse);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error:', error);
      });
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={4}
      center={{ lat: 12.36703, lng: 12.36703 }}
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
                  selectedStatuses[data.last_status as PhoneStatusEnum],
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
  );
};
