import { BoxGeometry, MeshStandardMaterial, Mesh, ShaderMaterial } from 'three'
import vertex from '/@/shaders/vertex.glsl'
import fragment from '/@/shaders/fragment.glsl'
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
		extensions: {
			derivatives: '#extension GL_OES_standard_derivatives : enable',
		},
		side: THREE.DoubleSide,
		uniforms: {
			time: { type: 'f', value: 0 },
			resolution: { type: 'v4', value: new THREE.Vector4() },
			uvRate1: {
				value: new THREE.Vector2(1, 1),
			},
		},
		// wireframe: true,
		// transparent: true,
		vertexShader: vertex,
		fragmentShader: fragment,
	})
	const mesh = new Mesh(geometry, material)
	mesh.position.set(0.5, 0, 0)
	scene.add(mesh)
}
