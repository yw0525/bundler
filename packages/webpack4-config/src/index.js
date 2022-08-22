'use strict'

import React from 'react'
import { createRoot  } from 'react-dom/client'

import './style.scss'

const Search = () => <div className="text">Hello React</div>

createRoot(
  document.getElementById('app')
).render(<Search />)
