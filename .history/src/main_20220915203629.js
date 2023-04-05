import './style.css'
import * as THREE from 'three'

let camera, renderer, scene

camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	1,
	1000
)
camera.position.set(0, 0, 5)
renderer = new THREE.WebGLRenderer()
scene = new THREE.Scene()

init()
function init() {
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)
	addModels()
	addLights()
	animate()
}

function addLights() {
	// add lights here
	const light = new THREE.DirectionalLight(0xffffff, 1)
	light.position.set(1, 1, 1)
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
