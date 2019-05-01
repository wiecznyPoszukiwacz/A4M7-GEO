'use strict'

const {Group} = require('three')

const genericMaterial = require('./../../materials/generics')

const factory3d = require('./../../../helpers/3d/factory')

class Tube{

	constructor(site, options = {}){

		options.x  = options.x || 0
		options.y  = options.y || 0
		options.z  = options.z || 0

		let group = new Group()

		let tube = factory3d.createCylinder({
			r: options.r, h: options.l,
			y: 0, x: 0, z: 0,
			material: genericMaterial.chasis,
			group
		})

		if(options.axis === 'z'){
			tube.rotateX(90 * (Math.PI/180))
			group.position.z = options.z + options.l / 2
			group.position.y = options.y + 0.5
			group.position.x = options.x + 0.5
		}


		site.add(group)

	}

}

module.exports = Tube