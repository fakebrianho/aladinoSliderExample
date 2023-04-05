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
	addModels()
	addLight(1, 1, 1, scene)
	animate()
}

function addModels() {
	// add models here
	const geometry = new THREE.BoxGeometry(1, 1, 1)
	const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
	const mesh = new THREE.Mesh(geometry, material)
	scene.add(mesh)
}

function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}
