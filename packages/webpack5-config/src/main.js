import createHeading from './headling'
import Avator from './avator.jpg'

import './main.css'

const headling = createHeading()
document.body.append(headling)

const img = new Image()
img.src = Avator
document.body.append(img)

// cjs
// const createHeading = require('./headling').default
// const Avator = require('./avator.jpg')

// require('./main.css')

// const headling = createHeading()
// document.body.append(headling)

// const img = new Image()
// img.src = Avator
// document.body.append(img)

// AMD
// define(['./headling.js', './avator.jpg', './main.css'], (createHeading, Avator) => {
//   const headling = createHeading.default()
//   document.body.append(headling)

//   const img = new Image()
//   img.src = Avator
//   document.body.append(img)
// })


// ========== fetch proxy api example
const isProd = process.env.NODE_ENV === 'production'
const url = isProd ? 'https://api.github.com/users' : '/api/users'

const ul = document.createElement('ul')

fetch(url)
  .then(res => res.json())
  .then(data => {
    if (Array.isArray(data)) {
      data.forEach(item => {
        const li = document.createElement('li')        
        li.textContent = item.login
        ul.append(li)
      })

      document.body.append(ul)
    }
  })
  

// eg：souce map testing
console.log2('source map')
