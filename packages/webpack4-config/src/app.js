import Avator from './avator.jpg'

import './styles.scss'

const App = () => {
  return <div>
    <div className="text">Hello React</div>
    <div className="avator">
      <img width={ 200 } src={ Avator } />
    </div>
  </div>
}

export default App
