import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'
import './index.css'

const container = document.getElementById('root')
if (container == null) throw new Error('Failed to find the root element')
const root = createRoot(container)

root.render(<App />)
