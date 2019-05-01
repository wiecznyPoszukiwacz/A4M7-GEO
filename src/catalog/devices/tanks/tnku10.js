'use strict'

const {Group} = require('three')

const materialGlass = require('./../../materials/glass')
const waterMaterial = require('./../../materials/liquids/water')
const genericMaterial = require('./../../materials/generics')

const factory3d = require('./../../../helpers/3d/factory')

/*
 * TNK U10
 * universal tank, v=10m3
 */
class TNKU10{

	constructor(site, options = {}){

		if(options.liquidMaterial === undefined){
			options.liquidMaterial = waterMaterial.clean
		}

		options.x  = options.x || 0
		options.y  = options.y || 0
		options.z  = options.z || 0

		let group = new Group()

		group.castShadow = true

		// zbiornik
		let mainCylinder = factory3d.createCylinder({
			r: 0.9, h: 2.9,
			y: 1 + (2.9 / 2),
			material: materialGlass.plain,
			group
		})

		mainCylinder.castShadow = true

		// zawartość
		let liquidMesh = factory3d.createCylinder({
			r: 0.85, h: 2,
			y: 1 + (2 / 2),
			material: options.liquidMaterial,
			group
		})

		// podstawa
		let base = factory3d.createBox({
			w: 2, h: 1, d: 2,
			y: 0.50,
			material: genericMaterial.chasis,
			group
		})

		// daszek
		let top = factory3d.createBox({
			w: 2, h: 0.1, d: 2,
			y: 3.95,
			material: genericMaterial.chasis,
			group
		})

		top.castShadow = true

		// mocowanie
		let mnt1 = factory3d.createCylinder({
			r: 0.1, h: 2.9,
			y: 1 + (2.9 / 2), z: 0.8, x: 0.8,
			material: genericMaterial.chasis,
			group
		})
		let mnt2 = factory3d.createCylinder({
			r: 0.1, h: 2.9,
			y: 1 + (2.9 / 2), z: -0.8, x: 0.8,
			material: genericMaterial.chasis,
			group
		})
		let mnt3 = factory3d.createCylinder({
			r: 0.1, h: 2.9,
			y: 1 + (2.9 / 2), z: 0.8, x: -0.8,
			material: genericMaterial.chasis,
			group
		})
		let mnt4 = factory3d.createCylinder({
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

}

module.exports = TNKU10