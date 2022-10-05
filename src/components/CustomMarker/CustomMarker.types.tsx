import { Clusterer } from '@react-google-maps/marker-clusterer'

import { ApiMarkerData } from '../../utils/types/phones.types'

export interface CustomMarkerProps extends ApiMarkerData {
  clusterer: Clusterer
}
