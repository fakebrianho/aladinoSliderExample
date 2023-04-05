import './style.css'
import * as THREE from 'three'
import { sizes, camera } from './camera'
import addLight from './lights'
import { addDefaultModels, addShader } from './defaultModels'
import { PARAMS, pane } from './controls'
let renderer, scene, defaultMesh, defaultShaderMesh, defaultLight

renderer = new THREE.WebGLRenderer()
scene = new THREE.Scene()

init()
function init() {
	renderer.setSize(sizes.width, sizes.height)
	document.body.appendChild(renderer.domElement)
	defaultMesh = addDefaultModels()
	defaultShaderMesh = addShader()
	defaultLight = addLight()
	scene.add(defaultMesh)
	scene.add(defaultShaderMesh)
	scene.add(defaultLight)
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
	// console.log(PARAMS.displacementStrength)
	// if (PARAMS.displacementStrength > 0.1) {
	// 	defaultShaderMesh.material.uniforms.displacementStrength.value =
	// 		PARAMS.displacementStrength
	// }
	// defaultShaderMesh.material.uniforms.displacementStrength.value =
	// PARAMS.displacementStrength
	defaultShaderMesh.rotation.y -= 0.01
	defaultShaderMesh.rotation.z += 0.01
	defaultMesh.rotation.x += 0.01
	defaultMesh.rotation.y += 0.01
	renderer.render(scene, camera)
}
