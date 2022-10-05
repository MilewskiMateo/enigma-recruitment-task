import { Box, Checkbox, FormControlLabel, Slider, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'

import { PhoneStatusEnum } from '../../utils/types/phones.types'
import { FiltersSectionProps } from './FiltersSection.types'

export const FiltersSection = ({ speed, selectedStatuses, handleSpeedChange, toggleStatus }: FiltersSectionProps) => {
  const checkboxes = (Object.keys(PhoneStatusEnum) as Array<keyof typeof PhoneStatusEnum>).map((key) => {
    const status = PhoneStatusEnum[key]
    return (
      <FormControlLabel
        key={status}
        control={
          <Checkbox
            checked={selectedStatuses[status]}
            onChange={() => toggleStatus(status)}
            sx={sx.checkbox}
          />
        }
        label={status}
        sx={sx.subtitle}
      />
    )
  })

  return (
    <Box sx={sx.filtersWrapper}>
      <Typography
        variant="h2"
        sx={sx.title}
      >
        Filter phones
      </Typography>
      <Box>
        <Typography
          sx={sx.subtitle}
          variant="h5"
        >
          Speed:
        </Typography>
        <Slider
          sx={sx.slider}
          value={speed}
          onChange={handleSpeedChange}
          valueLabelDisplay="auto"
        />
      </Box>

      <Box>
        <Typography
          sx={sx.subtitle}
          variant="h5"
        >
          Phone status:
        </Typography>
        <Box sx={sx.checkboxesWrapper}>{checkboxes}</Box>
      </Box>
    </Box>
  )
}

const sx = {
  filtersWrapper: {
    height: '700px',
    display: 'flex',
    justifyContent: 'end',
    flexDirection: 'column',
    paddingBottom: '40px',
    gap: '40px'
  },
  title: {
    color: 'white',
    fontWeight: '700'
  },
  subtitle: {
    fontWeight: '500',
    color: 'white'
  },
  checkboxesWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  checkbox: {
    color: deepOrange[800],
    '&.Mui-checked': {
      color: deepOrange[600]
    }
  },
  slider: {
    color: deepOrange[600],
    height: 8,
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit'
      },
      '&:before': {
        display: 'none'
      }
    },
    '& .MuiSlider-valueLabel': {
      backgroundColor: deepOrange[600]
    }
  }
}
