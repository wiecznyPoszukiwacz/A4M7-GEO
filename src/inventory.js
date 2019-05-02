'use strict'

let catalog = {
	TNKU10:  require('./catalog/devices/tanks/tnku10'),
	WT50: require('./catalog/devices/waterTreatment/wt50'),
	WT0:  require('./catalog/devices/waterTreatment/wt0'),
	Tube:  require('./catalog/devices/tubing/tubing'),
	Bend:  require('./catalog/devices/tubing/bend')
}

let inventory = {}

window.a4m7 = {
	inventory
}

const createDevices = (site, inv) => {

	for(let deviceId in inv.devices){

		let device = inv.devices[deviceId]

		if(catalog[device.model] !== undefined){
			inventory[deviceId] = new catalog[device.model](site, device.config)
		}

	}
}

module.exports = {
	createDevices
}