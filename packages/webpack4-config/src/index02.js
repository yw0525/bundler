'use strict'

import React from 'react'
import { createRoot  } from 'react-dom/client'
import App from './app'
import { a } from './tree-shaking'

console.log(a())

createRoot(
  document.getElementById('app')
).render(<App />)
