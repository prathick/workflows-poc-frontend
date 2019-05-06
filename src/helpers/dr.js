// Dynamic components/views renderer

import React from 'react'
import SV from 'views/specific'
import GV from 'views/generic'
import SC from 'components/specific'
import GC from 'components/generic'

const components = {
  ...SC, ...GC
}

const views = {
  ...SV, ...GV
}

export const getDC = function(key, dataToPass) {
  const Component = components[key]
  return <Component content={dataToPass}/>
}

export const getDV = function(key, dataToPass) {
  const View = views[key]
  return <View content={dataToPass}/>
}
