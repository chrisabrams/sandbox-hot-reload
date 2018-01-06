import React from 'react'
import { hot } from 'react-hot-loader'

export default hot(module)(function renderHot(Component) {

  // This does not fire
  console.log('typeof inside', typeof Component)
  return Component

})
