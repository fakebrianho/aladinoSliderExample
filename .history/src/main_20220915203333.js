import './style.css'
import * as THREE from 'three'

let camera, renderer, scene

camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	1,
	1000
)
renderer = new THREE.WebGLRenderer()
scene = new THREE.Scene()

function init() {
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)
	animate()
}
