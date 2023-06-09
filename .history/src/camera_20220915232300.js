import { PerspectiveCamera } from 'three'

const FOV = 45
export const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}
export const camera = new PerspectiveCamera(
	FOV,
	window.innerWidth / window.innerHeight,
	1,
	1000
)
window.addEventListener('resize', () => {
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()
})
camera.position.set(0, 0, 5)

export default camera
