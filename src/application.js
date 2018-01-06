import React from 'react'
import ReactDOM from 'react-dom'
import renderHot from './renderHot'
import Theme from './theme'

const Component = renderHot(<Theme />)

ReactDOM.render(<Component />, document.getElementById('root'))
