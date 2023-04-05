// import './style.css'
import * as THREE from 'three'
import { sizes, camera } from './camera'
import addLight from './lights'
import { addDefaultModels, addShader } from './defaultModels'
// import { PARAMS, pane } from './controls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Lerp } from './lerp'
import Aladino from './index'
// import Flickity from 'flickity'

/*------------------------------
Blotter
------------------------------*/
// BLOTTER - Example 2
var text = new Blotter.Text('observation', {
	family: "'EB Garamond', serif",
	size: 27,
	fill: '#ffffff',
	paddingLeft: 40,
	paddingRight: 40,
})

var bMat = new Blotter.LiquidDistortMaterial()

// Play with the value for uSpeed. Lower values slow
// down animation, while higher values speed it up. At
// a speed of 0.0, animation is stopped entirely.
bMat.uniforms.uSpeed.value = 0.25
bMat.uniforms.uVolatility.value = 0.3
// Try uncommenting the following line to play with
// the "volatility" of the effect. Higher values here will
// produce more dramatic changes in the appearance of your
// text as it animates, but you will likely want to keep
// the value below 1.0.
//material.uniforms.uVolatility.value = 0.30;

var blotter = new Blotter(bMat, {
	texts: text,
})

var elem = document.getElementById('distortion-text')
var scope = blotter.forText(text)

scope.appendTo(elem)

const flkty = new Flickity(document.querySelector('.carousel'), {
	freeScroll: true,
	dragThreshold: 0,
	freeScrollFriction: 0.07,
	prevNextButtons: false,
	pageDots: false,
})

const isFF = navigator.userAgent.indexOf('Firefox') > -1

document.addEventListener(
	'wheel',
	(e) => {
		e.preventDefault()

		let y = e.wheelDeltaY || e.deltaY * -1

		if (isFF) {
			y *= 5
		}

		flkty.applyForce(y * 0.03)
		flkty.startAnimation()
		flkty.dragEnd()
	},
	{ passive: false }
)

const aladino = new Aladino({
	density: 20,
	post: {
		fragment: /* glsl */ `
	  precision highp float;

	  uniform float time;
	  uniform float speed;
	  uniform vec2 viewport;
	  uniform sampler2D image;
	  float parabola(float x, float k) {
		return pow(4.0*x*(1.0-x), k);
	  }
	  float random(vec2 co) {
		return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
	  }
	  void main() {
		vec2 uv = gl_FragCoord.xy / viewport;
		float spe = speed * 300.0;
		float p = parabola(uv.x, 1.4);
		float r = texture2D(image, uv + vec2(0.000 * spe, 0.0) * p).r;
		float g = texture2D(image, uv + vec2(0.01 * spe, 0.0) * p).g;
		float b = texture2D(image, uv + vec2(0.02 * spe, 0.0) * p).b;
		gl_FragColor = vec4(r, g, b, 1.0);
		float n = random(uv + mod(time, 3.0));
		gl_FragColor.rgb *= 1.0 - (n * 0.2);
	  }
	`,
		uniforms: {
			speed: 0.0,
		},
	},
})

document.body.appendChild(aladino.canvas)

const material = aladino.material({
	vertex: /* glsl */ `
	attribute vec2 position;
	attribute vec2 uv;
	uniform mat4 projection;
	//uniform float time;
	uniform float speed;
	uniform float speed2;
	varying vec2 vUv;
	float parabola( float x, float k ) {
	  return pow( 4.0*x*(1.0-x), k );
	}
	void main() {
	  vUv = uv;
	  vec4 pos = vec4(position, 0.0, 1.0);
	  float spee = speed * 2.0;
	  pos.x += parabola(uv.y, 1.0) * spee;
	  vec4 pp = projection * vec4(position, 0.0, 1.0);
	  float yy = ((pp / pp.w).x + 1.0) / 2.0;
	  pos.z = parabola(clamp(yy, 0.0, 1.0), 2.4) * speed2 * 160.0;
	  pos.z = clamp(pos.z, -6.0, 6.0);
	  gl_Position = projection * pos;
	}
  `,
	fragment: /* glsl */ `
	precision highp float;
	uniform vec2 size;
	uniform vec2 sizeImage;
	uniform sampler2D image;
	varying vec2 vUv;
	vec4 coverTexture(sampler2D tex, vec2 imgSize, vec2 ouv) {
	  vec2 s = size;
	  vec2 i = imgSize;
	  float rs = s.x / s.y;
	  float ri = i.x / i.y;
	  vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
	  vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
	  vec2 uv = ouv * s / new + offset;

	  return texture2D(tex, uv);
	}
	void main() {
	  gl_FragColor = coverTexture(image, sizeImage, vUv);
	}
  `,
	uniforms: {
		speed: 0,
		speed2: 0,
	},
})

const cells = [...document.querySelectorAll('#cell')]
console.log(cells)
const carpets = []
cells.forEach((cell) => {
	console.log(cell)
	const carpet = aladino.carpet(cell, {
		material,
		uniforms: {
			// image: aladino.texture(cell.querySelector('img').src),
			image: aladino.texture(cell.src),
		},
	})

	carpets.push(carpet)
})

let oldProgress = 0
let speed = 0

flkty.on('scroll', (progress) => {
	// The way flickity works doesn't allow an easy use of the position,
	// So it can be optimised, as here we're recalculating dom boundingbox each time
	carpets.forEach((carpet) => {
		carpet.resize()
	})

	speed = oldProgress - progress
	oldProgress = progress
})

const update = () => {
	requestAnimationFrame(update)

	material.uniforms.speed = Lerp(material.uniforms.speed, speed, 0.6)
	material.uniforms.speed2 = Lerp(material.uniforms.speed2, speed, 0.1)
	aladino.post.uniforms.speed = Lerp(aladino.post.uniforms.speed, speed, 0.1)
}

update()
