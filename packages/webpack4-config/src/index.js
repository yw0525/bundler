'use strict'

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

import { a } from './tree-shaking'

console.log(a())

setTimeout(() => {
  // source map testing
  throw new Error('sssssssssssssssssss')
}, 2000);

createRoot(
  document.getElementById('app')
).render(<App />)
