import React from 'react'
import { hot } from 'react-hot-loader'

const wrapHot = hot(module)

export default function renderHot(Component) {

  const Wrapped = () => Component

  return wrapHot(Wrapped)

}
