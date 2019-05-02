'use strict'

const {Group} = require('three')

const materialGlass = require('./../../materials/glass')
const waterMaterial = require('./../../materials/liquids/water')
const genericMaterial = require('./../../materials/generics')

const CylinderTank = require('./../components/CylinderTank')
const factory3d = require('./../../../helpers/3d/factory')

/*
 * TNK U10
 * universal tank, v=10m3
 */
class TNKU10{

	constructor(site, options = {}){

		this.liquidLevel = 1/2.9

		if(options.liquidMaterial === undefined){
			options.liquidMaterial = waterMaterial.clean
		}

		options.x  = options.x || 0
		options.y  = options.y || 0
		options.z  = options.z || 0

		let group = new Group()

		this.tank = new CylinderTank(group, {
			r: 0.9, h: 2.9,
			y: 1,
			tankMaterial: materialGlass.plain,
			liquidMaterial: options.liquidMaterial,
			fill: 0.5
		})

		// podstawa
		factory3d.createBox({
			w: 2, h: 1, d: 2,
			y: 0.50,
			material: genericMaterial.chasis,
			group
		})

		// daszek
		factory3d.createBox({
			w: 2, h: 0.1, d: 2,
			y: 3.95,
			material: genericMaterial.chasis,
			group
		})

		// mocowanie
		factory3d.createCylinder({
			r: 0.1, h: 2.9,
			y: 1 + (2.9 / 2), z: 0.8, x: 0.8,
			material: genericMaterial.chasis,
			group
		})
		factory3d.createCylinder({
			r: 0.1, h: 2.9,
			y: 1 + (2.9 / 2), z: -0.8, x: 0.8,
			material: genericMaterial.chasis,
			group
		})
		factory3d.createCylinder({
			r: 0.1, h: 2.9,
			y: 1 + (2.9 / 2), z: 0.8, x: -0.8,
			material: genericMaterial.chasis,
			group
		})
		factory3d.createCylinder({
			r: 0.1, h: 2.9,
			y: 1 + (2.9 / 2), z: -0.8, x: -0.8,
			material: genericMaterial.chasis,
			group
		})

		group.position.z = options.z + 1
		group.position.y = options.y
		group.position.x = options.x + 1

		site.add(group)

	}

	set level(l){
		this.liquidLevel = l
		this.tank.setFill(l)
	}

	get level(){
		return this.liquidLevel
	}

}

module.exports = TNKU10