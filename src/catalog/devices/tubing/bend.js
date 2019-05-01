'use strict'

const {Group, TorusBufferGeometry, Mesh} = require('three')

const genericMaterial = require('./../../materials/generics')


class Bend{

	constructor(site, options = {}){

		options.x  = options.x || 0
		options.y  = options.y || 0
		options.z  = options.z || 0

		let group = new Group()

		let geometry = new TorusBufferGeometry(0.5, 0.2, 32, 32, 90 * (Math.PI / 180))
		let mesh = new Mesh(geometry, genericMaterial.chasis)


		group.add(mesh)

		if(options.plane === 'xz'){
			group.rotateX(90 * (Math.PI/180))
			group.position.z = options.z
			group.position.y = options.y + 0.5
			group.position.x = options.x
		}

		if(options.r !== undefined){
			group.rotateZ(270 * (Math.PI/180))
			group.position.z = options.z += 1
		}


		site.add(group)

	}

}

module.exports = Bend