import React, { useState } from 'react'
import Avator from './avator.jpg'

import './styles.scss'

const App = () => {
  const [component, setComponent] = useState('')

  const loadComponent = () => {
    import('./dynamic.js')
      .then(res => {
        setComponent(res.default)
      })
  }

  return <div>
    <div className="text">Hello React</div>
    <div className="avator">
      <img width={ 200 } src={ Avator } />
    </div>
    <br />
    <div>{ component  }</div>
    <div onClick={loadComponent}>click</div>
  </div>
}

export default App
