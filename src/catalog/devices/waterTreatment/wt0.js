'use strict'

const {Group} = require('three')

const materialGlass = require('./../../materials/glass')
const waterMaterial = require('./../../materials/liquids/water')
const genericMaterial = require('./../../materials/generics')

const factory3d = require('./../../../helpers/3d/factory')

/*
 * WT0
 * water treatment device
 * outputs 0% polluted water
 */
class WT0{

	constructor(site, options = {}){

		if(options.liquidMaterial === undefined){
			options.liquidMaterial = waterMaterial.clean
		}

		options.x  = options.x || 0
		options.y  = options.y || 0
		options.z  = options.z || 0

		let group = new Group()

		// zbiornik na wodę brudną
		factory3d.createCylinder({
			r: 0.4, h: 2,
			y: 1 + (2 / 2), z: 0.5,
			material: materialGlass.plain,
			group
		})
		// woda brudna
		factory3d.createCylinder({
			r: 0.38, h: 1.8,
			y: 1 + (1.8 / 2), z: 0.5,
			material: waterMaterial.polluted50,
			group
		})
		// zbiornik na wodę oczyszczoną
		factory3d.createCylinder({
			r: 0.4, h: 2,
			y: 1 + (2 / 2), z: -0.5,
			material: materialGlass.plain,
			group
		})
		// woda oczyszczona
		factory3d.createCylinder({
			r: 0.38, h: 1,
			y: 1 + (1 / 2), z: -0.5,
			material: waterMaterial.clean,
			group
		})

		// podstawa
		let base = factory3d.createBox({
			w: 2, h: 1, d: 2,
			y: 0.50,
			material: genericMaterial.chasis,
			group
		})

		group.position.z = options.z + 1
		group.position.y = options.y
		group.position.x = options.x + 1

		site.add(group)

	}

}

module.exports = WT0