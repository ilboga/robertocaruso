import Vue from 'vue'
import path from 'path'
const requireComponent = require.context('~/assets/icons', true, /\.svg$/)
export default (context) => {
  return Promise.all(
    requireComponent.keys().map(async (fileName) => {
      const name = path.basename(fileName, '.svg')
      const componentConfig = await import(
        '~/assets/icons/' + name + '.svg?inline'
      )
      Vue.component('icon-' + name, componentConfig.default || componentConfig)
    })
  )
}
