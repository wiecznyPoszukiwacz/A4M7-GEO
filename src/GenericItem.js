'use strict'

//import * as THREE from 'three'
let THREE = require('three')

class GenericItem {
    constructor(site, options = {}){

        let defaults = {
            x: 0, y: 0, z: 0, w: 1, d: 1, h: 1
        }

        let c = Object.assign({}, defaults, options)

        this.geometry = new THREE.BoxGeometry(c.w, c.h, c.d);

        this.material = new THREE.MeshLambertMaterial( { color: 0xe0e0e0, wireframe: false,
            transparent: true, opacity: 0.85
        } );

        this.cube = new THREE.Mesh( this.geometry, this.material );

        this.cube.position.x = c.x + c.w/2
        this.cube.position.y = c.y + c.h/2
        this.cube.position.z = c.z + c.d/2

        site.add(this.cube)

    }

    statusUpdate(d){
        //this.cube.position.x = d.status.outChamber.quantity
        this.cube.scale.y = d.status.outChamber.quantity
        //this.cube.geometry.parameters.width = 4
        //this.geometry.scale(new THREE.Vector3(1, 1, d.status.outChamber.quantity))
    }

}

module.exports = GenericItem