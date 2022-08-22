'use strict'

import React from 'react'
import { createRoot  } from 'react-dom/client'
import App from './app'

setTimeout(() => {
  // source map testing
  throw new Error('sssssssssssssssssss')
}, 2000);

createRoot(
  document.getElementById('app')
).render(<App />)
