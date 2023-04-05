import { BoxGeometry, MeshStandardMaterial, Mesh, ShaderMaterial } from 'three'

export const addDefaultModels = (scene) => {
	const geometry = new BoxGeometry(1, 1, 1)
	const material = new MeshStandardMaterial({ color: 0xff0000 })
	const mesh = new Mesh(geometry, material)
	mesh.position.set(-0.5, 0, 0)
	scene.add(mesh)
}

export const addShader = (scene) => {
	const geometry = new BoxGeometry(1, 1, 1)
	const material = new ShaderMaterial({
		color: 0xff0000,
	})
	const mesh = new Mesh(geometry, material)
	mesh.position.set(0.5, 0, 0)
	scene.add(mesh)
}
