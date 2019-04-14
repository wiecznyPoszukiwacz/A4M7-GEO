'use strict'

let THREE = require('three')
//let Trackball = require('three-trackballcontrols')
//let {MapControls} = require('three-map-controls')
require('./lib/MapControls')

class Site{

    constructor(){

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xf0f0f0 );

        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({antialias: true});

        this.renderer.setSize( window.innerWidth, window.innerHeight );


        const light = new THREE.PointLight(0xffffff)
        light.position.x = 0
        light.position.y = 10
        light.position.z = 0

        const light2 = new THREE.PointLight(0xffffff)
        light2.position.x = 300
        light2.position.y = 4000
        light2.position.z = 0

        this.scene.add(light)
        this.scene.add(light2)

        const ambient = new THREE.AmbientLight(0xaaaaaa)

        this.scene.add(ambient)

        this.camera.position.z = 5;
        this.camera.position.y = 5;
        this.camera.position.x = 5;

        document.body.appendChild(this.renderer.domElement)


        let axesHelper = new THREE.AxesHelper(5)
        let gridHelper = new THREE.GridHelper(100, 100, 0xa6a6a6, 0xe0e0e0)

        this.scene.add(axesHelper)
        this.scene.add(gridHelper)


        //let controls = new Trackball(this.camera)

        let controls = new THREE.MapControls(this.camera, this.render.domElement, {
            target: new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
            minDistance: 2.0,
            maxDistance: 20
        })
        controls.addEventListener('change', render)

        function animate() {
            requestAnimationFrame( animate );
            controls.update()
        }

        let camera = this.camera
        let renderer = this.renderer
        let scene = this.scene
        function render(){

            renderer.render(scene, camera );
        }

        render()
        animate()
    }

    add(item){
        this.scene.add(item)
        this.renderer.render(this.scene, this.camera);
    }

    render(){
        this.renderer.render(this.scene, this.camera);
    }

}

module.exports = Site