/*------------------------------
Blotter
------------------------------*/

export const addText = () => {
	let t1 = new Blotter.Text('observation', {
		family: "'EB Garamond', serif",
		size: 27,
		fill: '#ffffff',
		paddingLeft: 40,
		paddingRight: 40,
	})
	let t2 = new Blotter.Text('HelloWorld', {
		family: "'EB Garamond', serif",
		size: 27,
		fill: '#ffffff',
		paddingLeft: 40,
		paddingRight: 40,
	})
}
// BLOTTER - Example 2
var text = new Blotter.Text('observation', {
	family: "'EB Garamond', serif",
	size: 27,
	fill: '#ffffff',
	paddingLeft: 40,
	paddingRight: 40,
})

var bMat = new Blotter.LiquidDistortMaterial()

bMat.uniforms.uSpeed.value = 0.25
bMat.uniforms.uVolatility.value = 0.1

var blotter = new Blotter(bMat, {
	texts: text,
})

var elem = document.getElementById('distortion-text')
var scope = blotter.forText(text)

scope.appendTo(elem)
/*------------------------------
Blotter
------------------------------*/
var text2 = new Blotter.Text('helloworld', {
	family: "'EB Garamond', serif",
	size: 27,
	fill: '#ffffff',
	paddingLeft: 40,
	paddingRight: 40,
})

// var bMat = new Blotter.LiquidDistortMaterial()

// bMat.uniforms.uSpeed.value = 0.25
// bMat.uniforms.uVolatility.value = 0.1

var blotter2 = new Blotter(bMat, {
	texts: text2,
})

var elem2 = document.getElementById('distortion-text2')
var scope2 = blotter2.forText(text2)

scope2.appendTo(elem2)
