'use strict'

let Site        = require('./Site')

let TNKU10 = require('./catalog/devices/tanks/tnku10')

let WT50 = require('./catalog/devices/waterTreatment/wt50')
let WT0 = require('./catalog/devices/waterTreatment/wt0')
const Tube = require('./catalog/devices/tubing/tubing')
const Bend = require('./catalog/devices/tubing/bend')

let water = require('./catalog/materials/liquids/water')

const site = new Site()


let tank1 = new TNKU10(site, {z: 1, liquidMaterial: water.clean})

tank1.castShadow = true

new WT0(site, {z: 4})

new Bend(site, {x: 2, z: 13, plane: 'xz'})
new Tube(site, {x: 2, l: 1, z: 12, r: 0.2, axis: 'z'})
new Bend(site, {x: 2, z: 11, plane: 'xz', r: Math.PI})

new Bend(site, {x: 2, z: 10, plane: 'xz'})
new Tube(site, {x: 2, l: 1, z: 9, r: 0.2, axis: 'z'})
new Bend(site, {x: 2, z: 8, plane: 'xz', r: Math.PI})

new Bend(site, {x: 2, z: 7, plane: 'xz'})
new Tube(site, {x: 2, l: 1, z: 6, r: 0.2, axis: 'z'})
new Bend(site, {x: 2, z: 5, plane: 'xz', r: Math.PI})

new Bend(site, {x: 2, z: 4, plane: 'xz'})
new Tube(site, {x: 2, l: 1, z: 3, r: 0.2, axis: 'z'})
new Bend(site, {x: 2, z: 2, plane: 'xz', r: Math.PI})

let tank2 = new TNKU10(site, {z: 7, liquidMaterial: water.polluted50})

new WT50(site, {z: 10})

let tank3 = new TNKU10(site, {z: 13, liquidMaterial: water.polluted100})




/*
let ws = new WebSocket('ws://localhost:2000/ws')

ws.onmessage = event => {
    console.log('message: %s', event.data)
    let d = JSON.parse(event.data)
    waterSource.statusUpdate(d)
    site.render()
}
*/