import { PhoneStatusEnum } from '../../utils/types/phones.types'

export interface FiltersSectionProps {
  speed: number[]
  selectedStatuses: SelectedStatuses
  handleSpeedChange: (event: Event, newValue: number | number[]) => void
  toggleStatus: (status: PhoneStatusEnum) => void
}
export interface SelectedStatuses {
  'No Alarm': boolean
  'Device Offline': boolean
  'Device Online': boolean
  'Flight Mode': boolean
}
