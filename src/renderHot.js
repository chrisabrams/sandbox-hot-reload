import React from 'react'
import { hot } from 'react-hot-loader'

export default hot(module)(function renderHot(Component) {
  console.log('helloo?????')
  const Wrapped = () => Component

  return Wrapped

})
