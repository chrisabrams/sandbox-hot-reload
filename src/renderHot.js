import React from 'react'
import { hot } from 'react-hot-loader'

export default hot(module)(function renderHot(Component) {
  console.log('helloo?????')
  const Wrapped = () => Component

  return Wrapped

})

/*
This will work just fine to load (no error, but obv. no hot reload)

export default function renderHot(Component) {
  console.log('helloo?????')
  const Wrapped = () => Component

  return Wrapped

}
*/
