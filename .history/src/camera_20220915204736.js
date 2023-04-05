import * as THREE from 'three'

const FOV = 45
const sizes = {}
const camera = new THREE.PerspectiveCamera(
	FOV,
	window.innerWidth / window.innerHeight,
	1,
	1000
)

export default camera
