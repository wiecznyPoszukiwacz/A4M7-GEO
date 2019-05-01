'use strict'

const {
	CylinderBufferGeometry,
	BoxBufferGeometry,
	Mesh,
	Group
} = require('three')

const position = (mesh, options) => {
	if(options.x !== undefined){
		mesh.position.x = options.x
	}
	if(options.y !== undefined){
		mesh.position.y = options.y
	}
	if(options.z !== undefined){
		mesh.position.z = options.z
	}
}

const createCylinder = (options) => {

	let geometry = new CylinderBufferGeometry(options.r, options.r, options.h, 32)
	let mesh = new Mesh(geometry, options.material)

	position(mesh, options)

	if(options.group !== undefined){
		options.group.add(mesh)
	}

	return mesh
}

const createBox = (options) => {

	let geometry = new BoxBufferGeometry(
		options.w, options.h, options.d
	)
	let mesh = new Mesh(geometry, options.material)

	position(mesh, options)

	if(options.group !== undefined){
		options.group.add(mesh)
	}

	return mesh
}

module.exports = {
	createCylinder, createBox
}