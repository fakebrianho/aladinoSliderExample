import './style.css'
import * as THREE from 'three'
import { sizes, camera } from './camera'
import addLight from './lights'
import { addDefaultModels, addShader } from './defaultModels'
let renderer, scene, defaultMesh, defaultShaderMesh

renderer = new THREE.WebGLRenderer()
scene = new THREE.Scene()

init()
function init() {
	renderer.setSize(sizes.width, sizes.height)
	document.body.appendChild(renderer.domElement)
	defaultMesh = addDefaultModels()
	defaultShaderMesh = addShader()
	scene.add(defaultMesh)
	scene.add(defaultShaderMesh)
	addLight(1, 1, 1, scene)
	animate()
}

window.addEventListener('resize', () => {
	/*------------------------------
  Update Sizes
  ------------------------------*/
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight
	/*------------e------------------
  Update Camera
  ------------------------------*/
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()
	/*------------------------------
  Update Renderer
  ------------------------------*/
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

function animate() {
	requestAnimationFrame(animate)
	defaultShaderMesh.material.uniforms.time.value += 0.01
	defaultShaderMesh.rotation.y -= 0.1
	defaultShaderMesh.rotation.z += 0.1
	defaultMesh.rotation.x += 0.1
	defaultMesh.rotation.y += 0.1

	renderer.render(scene, camera)
}
