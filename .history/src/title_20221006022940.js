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
		fill: '#ffffff',
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
	/*------------------------------
    Materials
    ------------------------------*/
	let bMat = new Blotter.LiquidDistortMaterial()
	bMat.uniforms.uSpeed.value = 0.25
	bMat.uniforms.uVolatility.value = 0.1

	/*------------------------------
    Mesh
    ------------------------------*/
	let blotter1 = new Blotter(bMat, {
		texts: t1,
	})

	let blotter2 = new Blotter(bMat, {
		texts: t2,
	})

	let blotter3 = new Blotter(bMat, {
		texts: t3,
	})

	let blotter4 = new Blotter(bMat, {
		texts: t4,
	})

	let blotter5 = new Blotter(bMat, {
		texts: t5,
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
	scope4.appendTo(dom5)

	return bMat
}
// // BLOTTER - Example 2
// var text = new Blotter.Text('observation', {
// 	family: "'EB Garamond', serif",
// 	size: 27,
// 	fill: '#ffffff',
// 	paddingLeft: 40,
// 	paddingRight: 40,
// })

// var bMat = new Blotter.LiquidDistortMaterial()

// bMat.uniforms.uSpeed.value = 0.25
// bMat.uniforms.uVolatility.value = 0.1

// var blotter = new Blotter(bMat, {
// 	texts: text,
// })

// var elem = document.getElementById('distortion-text')
// var scope = blotter.forText(text)

// scope.appendTo(elem)
// /*------------------------------
// Blotter
// ------------------------------*/
// var text2 = new Blotter.Text('helloworld', {
// 	family: "'EB Garamond', serif",
// 	size: 27,
// 	fill: '#ffffff',
// 	paddingLeft: 40,
// 	paddingRight: 40,
// })

// // var bMat = new Blotter.LiquidDistortMaterial()

// // bMat.uniforms.uSpeed.value = 0.25
// // bMat.uniforms.uVolatility.value = 0.1

// var blotter2 = new Blotter(bMat, {
// 	texts: text2,
// })

// var elem2 = document.getElementById('distortion-text2')
// var scope2 = blotter2.forText(text2)

// scope2.appendTo(elem2)
