import React from 'react'
import { hot } from 'react-hot-loader'

export default hot(module)(function renderHot(Component) {

  // Whether you return the Component directly or wrapped in a function it is still a object on return
  const Wrapped = () => Component

  return Wrapped

})
