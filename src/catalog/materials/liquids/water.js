'use strict'

const {
	MeshLambertMaterial,
} = require('three')

module.exports = {

	clean: new MeshLambertMaterial({
			color: 0x22aaff,
			transparent: true,
			opacity: 0.2
		}),
	polluted50: new MeshLambertMaterial({
			color: 0x112021,
			transparent: true,
			opacity: 0.3
	}),
	polluted100: new MeshLambertMaterial({
			color: 0x112021,
			transparent: true,
			opacity: 0.8
	})
}
