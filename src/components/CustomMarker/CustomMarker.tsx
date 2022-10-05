import { InfoWindow, Marker } from '@react-google-maps/api';
import React, { useState } from 'react';

import { PhoneStatusEnum } from '../../utils/types/phones.types';
import { CustomMarkerProps } from './CustomMarker.types';
import { getDetailsAsElements, getIconDependingOnStatus } from './helpers';

export const CustomMarker = ({ last_latitude, last_longitude, clusterer, ...rest }: CustomMarkerProps) => {
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  return (
    <Marker
      clusterer={clusterer}
      icon={getIconDependingOnStatus(rest.last_status as PhoneStatusEnum)}
      position={{ lat: Number(last_latitude), lng: Number(last_longitude) }}
      onClick={() => setInfoWindowOpen(true)}
    >
      {infoWindowOpen && (
        <InfoWindow onCloseClick={() => setInfoWindowOpen(false)}>
          <div>{getDetailsAsElements({ last_latitude, last_longitude, ...rest })}</div>
        </InfoWindow>
      )}
    </Marker>
  );
};
