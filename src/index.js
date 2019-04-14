'use strict'

let GenericItem = require('./GenericItem')
let Site        = require('./Site')

const site = new Site()

//let machines = []


let waterSource = new GenericItem(site, {h: 1})

//machines.push(waterSource)


let ws = new WebSocket('ws://localhost:2000/ws')

ws.onmessage = event => {
    console.log('message: %s', event.data)
    let d = JSON.parse(event.data)
    waterSource.statusUpdate(d)
    site.render()
}
