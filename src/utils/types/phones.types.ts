export interface PhonesResponse {
  request: string;
  status: string;
  data: ApiMarkerData[];
}

export interface ApiMarkerData {
  id: string;
  sim_number: string;
  imei: string;
  last_longitude: string;
  last_latitude: string;
  last_altitude: string;
  last_speed: string;
  last_status: PhoneStatusEnum;
  last_track_time: string;
  last_heartbeat: string;
}

export enum PhoneStatusEnum {
  FlightMode = 'Flight Mode',
  NoAlarm = 'No Alarm',
  DeviceOffline = 'Device Offline',
  DeviceOnline = 'Device Online',
}
