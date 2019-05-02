'use strict'

const Site        = require('./Site')
const Inventory   = require('./inventory')

const site = new Site()

function render(){
    requestAnimationFrame(render)
    site.render()
}

render()

fetch('http://127.0.0.1:2000/inventory/mainSite/')
    .then(resp => resp.json())
    .then(data => {
        Inventory.createDevices(site, data)
    })
    .catch(e => {
        console.log(e)
    })

/*
let ws = new WebSocket('ws://localhost:2000/ws')

ws.onmessage = event => {
    console.log('message: %s', event.data)
    let d = JSON.parse(event.data)
    waterSource.statusUpdate(d)
    site.render()
}
*/