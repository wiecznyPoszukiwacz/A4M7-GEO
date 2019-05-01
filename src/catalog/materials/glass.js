'use strict'

const {
	MeshLambertMaterial,
} = require('three')

module.exports = {

	plain: new MeshLambertMaterial({
			color: 0xffffff,
			transparent: true,
			opacity: 0.5
		})



}
