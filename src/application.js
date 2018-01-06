import React from 'react'
import ReactDOM from 'react-dom'
import renderHot from './renderHot'
import Theme from './theme'

const Component = new renderHot(<Theme />)
console.log('type theme', typeof Theme)
console.log('type hot', typeof Component) // Why am I type object?
ReactDOM.render(<Component />, document.getElementById('root'))
