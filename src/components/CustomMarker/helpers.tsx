import React from 'react'

import { ApiMarkerData, PhoneStatusEnum } from '../../utils/types/phones.types'

export const getIconDependingOnStatus = (status: PhoneStatusEnum) => {
  const base = {
    path:
      'M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.' +
      '25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z',
    fillOpacity: 1,
    scale: 2,
    strokeWeight: 2,
    fillColor: 'green',
    strokeColor: 'darkgreen'
  }
  switch (status) {
    case PhoneStatusEnum.NoAlarm:
      return {
        ...base,
        fillColor: 'lightblue',
        strokeColor: 'blue'
      }
    case PhoneStatusEnum.DeviceOffline:
      return {
        ...base,
        fillColor: 'pink',
        strokeColor: 'red'
      }
    case PhoneStatusEnum.DeviceOnline:
      return {
        ...base,
        fillColor: 'yellow',
        strokeColor: 'gold'
      }
    case PhoneStatusEnum.FlightMode:
      return {
        ...base,
        fillColor: 'orange',
        strokeColor: 'darkorange'
      }
    default:
      return base
  }
}

export const getDetailsAsElements = (data: ApiMarkerData) => {
  return Object.entries(data).map(([key, value]) => (
    <div key={key}>
      <strong>{key}</strong>: {value}
    </div>
  ))
}
