'use strict'

const {Group} = require('three')
const factory3d = require('./../../../helpers/3d/factory')

/*
 * cylindric tank
 */
class CylinderTank{

	constructor(site, options = {}){

		options.x  = options.x || 0
		options.y  = options.y || 0
		options.z  = options.z || 0

		this.h = options.h

		let group = new Group()

		// zbiornik
		factory3d.createCylinder({
			r: options.r, h: options.h,
			y: (options.h / 2),
			material: options.tankMaterial,
			group
		})

		// zawartość
		this.liquidMesh = factory3d.createCylinder({
			r: options.r - 0.02, h: 1,
			y: 0.5,
			material: options.liquidMaterial,
			group
		})

		group.position.z = options.z
		group.position.y = options.y
		group.position.x = options.x

		site.add(group)

	}

	setFill(fill){

		if(fill >= 1){
			fill = 0.99
		}

		let lh = this.h * fill
		this.liquidMesh.position.y = lh/2
		this.liquidMesh.scale.y = lh
	}

}

module.exports = CylinderTank