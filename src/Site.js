'use strict'

let THREE = require('three')
require('./lib/MapControls')

class Site{

    constructor(){

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xf0f0f0 );

        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({antialias: true});

        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapType = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap


        this.renderer.setSize( window.innerWidth, window.innerHeight );


        const light = new THREE.PointLight(0xffffff, 0.8, 200, 2)
        light.position.x = 50
        light.position.y = 50
        light.position.z = 100

        const light2 = new THREE.PointLight(0xffffff)
        light2.position.x = 300
        light2.position.y = 4000
        light2.position.z = 0

        this.scene.add(light)
        //this.scene.add(light2)

        // directional light
        let dl = new THREE.DirectionalLight(0xffffff, 1)
        dl.position.set(1, -1, 1).normalize()
        let dlh = new THREE.DirectionalLightHelper(dl, 5)

        dl.castShadow = true

        this.scene.add(dl)
        //this.scene.add(dlh)

        var geo = new THREE.PlaneBufferGeometry(100, 100, 1, 1);
        var mat = new THREE.MeshBasicMaterial({ color: 0xd0d0d0, side: THREE.DoubleSide });
        var plane = new THREE.Mesh(geo, mat);
        plane.rotateX( - Math.PI / 2);

        plane.receiveShadow = true

        this.scene.add(plane);

        // plane
        /*
        var planeGeometry = new THREE.PlaneBufferGeometry( 20, 20, 32, 32 );
        var planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
        var plane = new THREE.Mesh( planeGeometry, planeMaterial );
        plane.receiveShadow = true;
        this.scene.add( plane );
        */

        const ambient = new THREE.AmbientLight(0xaaaaaa)

        this.scene.add(ambient)

        this.camera.position.z = 12
        this.camera.position.y = 8
        this.camera.position.x = 12

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
            //renderer.render(this.scene, this.camera);
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