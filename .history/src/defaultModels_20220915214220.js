import { BoxGeometry, MeshStandardMaterial, Mesh } from 'three'

const addDefaultModels = (scene) => {
	const geometry = new BoxGeometry(1, 1, 1)
	const material = new MeshStandardMaterial({ color: 0xff0000 })
	const mesh = new Mesh(geometry, material)
}
