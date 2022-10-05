import { Box, Container } from '@mui/material'
import React, { useState } from 'react'

import { CustomMap } from './components/CustomMap/CustomMap'
import { FiltersSection } from './components/FiltersSection/FiltersSection'
import { PhoneStatusEnum } from './utils/types/phones.types'

export const App = () => {
  const [speed, setSpeed] = useState<number[]>([10, 60])
  const [selectedStatuses, setSelectedStatuses] = useState({
    'No Alarm': true,
    'Device Offline': true,
    'Flight Mode': true,
    'Device Online': true
  })

  const handleSpeedChange = (event: Event, newValue: number | number[]) => {
    setSpeed(newValue as number[])
  }

  const toggleStatus = (status: PhoneStatusEnum) => {
    setSelectedStatuses((prevState) => ({ ...prevState, [status]: !prevState[status] }))
  }

  return (
    <Box sx={sx.appWrapper}>
      <Container
        maxWidth="xl"
        sx={sx.contentWrapper}
      >
        <CustomMap
          speed={speed}
          selectedStatuses={selectedStatuses}
        />
        <FiltersSection
          speed={speed}
          selectedStatuses={selectedStatuses}
          handleSpeedChange={handleSpeedChange}
          toggleStatus={toggleStatus}
        />
      </Container>
    </Box>
  )
}

const sx = {
  appWrapper: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url("./img/background.jpg")',
    backgroundSize: 'cover'
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '120px'
  }
} as const
