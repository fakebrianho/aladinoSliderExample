import * as THREE from 'three'

const FOV = 45
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}
const camera = new THREE.PerspectiveCamera(
	FOV,
	window.innerWidth / window.innerHeight,
	1,
	1000
)

export default camera
