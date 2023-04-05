/*------------------------------
Blotter
------------------------------*/
export const addText = () => {
	/*------------------------------
    Text 
    ------------------------------*/
	let t1 = new Blotter.Text('Boulevard', {
		family: "'EB Garamond', serif",
		size: 70,
		fill: '#000',
		paddingLeft: 40,
		paddingRight: 40,
	})
	let t2 = new Blotter.Text('SynthWave', {
		family: "'EB Garamond', serif",
		size: 70,
		fill: '#ffffff',
		paddingLeft: 40,
		paddingRight: 40,
	})
	let t3 = new Blotter.Text('Der Losung', {
		family: "'EB Garamond', serif",
		size: 70,
		fill: '#ffffff',
		paddingLeft: 40,
		paddingRight: 40,
	})
	let t4 = new Blotter.Text('Shaders', {
		family: "'EB Garamond', serif",
		size: 70,
		fill: '#ffffff',
		paddingLeft: 40,
		paddingRight: 40,
	})
	let t5 = new Blotter.Text('I Was Here', {
		family: "'EB Garamond', serif",
		size: 70,
		fill: '#ffffff',
		paddingLeft: 40,
		paddingRight: 40,
	})
	let t6 = new Blotter.Text('About Me', {
		family: "'EB Garamond', serif",
		size: 70,
		fill: '#ffffff',
		paddingLeft: 40,
		paddingRight: 40,
	})
	/*------------------------------
    Materials
    ------------------------------*/
	var material = new Blotter.ChannelSplitMaterial()
	material.uniforms.uOffset.value = 0.5
	material.uniforms.uRotation.value = 50
	material.uniforms.uApplyBlur.value = 1
	material.uniforms.uAnimateNoise.value = 0.3
	// let bMat = new Blotter.LiquidDistortMaterial()
	// let bMat = new Blotter.ChannelSplitMaterial()
	// bMat.uniforms.uSpeed.value = 0.25
	// bMat.uniforms.uVolatility.value = 0.1
	let bMat2 = new Blotter.LiquidDistortMaterial()
	bMat2.uniforms.uSpeed.value = 0.25
	bMat2.uniforms.uVolatility.value = 0.1
	let bMat3 = new Blotter.LiquidDistortMaterial()
	bMat3.uniforms.uSpeed.value = 0.25
	bMat3.uniforms.uVolatility.value = 0.1
	let bMat4 = new Blotter.LiquidDistortMaterial()
	bMat4.uniforms.uSpeed.value = 0.25
	bMat4.uniforms.uVolatility.value = 0.1
	let bMat5 = new Blotter.LiquidDistortMaterial()
	bMat5.uniforms.uSpeed.value = 0.25
	bMat5.uniforms.uVolatility.value = 0.1
	let bMat6 = new Blotter.LiquidDistortMaterial()
	bMat6.uniforms.uSpeed.value = 0.25
	bMat6.uniforms.uVolatility.value = 0.1
	/*------------------------------
    Mesh
    ------------------------------*/
	let blotter1 = new Blotter(material, {
		texts: t1,
	})

	let blotter2 = new Blotter(bMat2, {
		texts: t2,
	})

	let blotter3 = new Blotter(bMat3, {
		texts: t3,
	})

	let blotter4 = new Blotter(bMat4, {
		texts: t4,
	})

	let blotter5 = new Blotter(bMat5, {
		texts: t5,
	})

	let blotter6 = new Blotter(bMat6, {
		texts: t6,
	})

	let dom1 = document.getElementById('distortion-text')
	let scope1 = blotter1.forText(t1)
	scope1.appendTo(dom1)

	let dom2 = document.getElementById('distortion-text2')
	let scope2 = blotter2.forText(t2)
	scope2.appendTo(dom2)

	let dom3 = document.getElementById('distortion-text3')
	let scope3 = blotter3.forText(t3)
	scope3.appendTo(dom3)

	let dom4 = document.getElementById('distortion-text4')
	let scope4 = blotter4.forText(t4)
	scope4.appendTo(dom4)

	let dom5 = document.getElementById('distortion-text5')
	let scope5 = blotter5.forText(t5)
	scope5.appendTo(dom5)

	let dom6 = document.getElementById('distortion-text6')
	let scope6 = blotter6.forText(t6)
	scope6.appendTo(dom6)

	return [material, bMat2, bMat3, bMat4, bMat5, bMat6]
}
