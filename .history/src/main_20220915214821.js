import './style.css'
import * as THREE from 'three'
import { sizes, camera } from './camera'
import addLight from './lights'
import addDefaultModels from './defaultModels'
let renderer, scene

renderer = new THREE.WebGLRenderer()
scene = new THREE.Scene()

init()
function init() {
	renderer.setSize(sizes.width, sizes.height)
	document.body.appendChild(renderer.domElement)
	addDefaultModels(scene)
	addLight(1, 1, 1, scene)
	animate()
}

function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}
