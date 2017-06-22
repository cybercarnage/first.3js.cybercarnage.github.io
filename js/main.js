var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);

var geometry = new THREE.BoxGeometry( 6, 6, 6 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// camera.position.z = 5;


camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));

//create a blue LineBasicMaterial
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });

var п = [
	{ x: -5, y: 0, z: 0},
	{ x: -5, y: 10, z: 0},
	{ x: 0, y: 10, z: 0},
	{ x: 0, y: 0, z: 0}
];
var и = [
	{ x: 5, y: 10, z: 0},
	{ x: 5, y: 0, z: 0},
	{ x: 10, y: 10, z: 0},
	{ x: 10, y: 0, z: 0}
];
var з = [
	{ x: 15, y: 10, z: 0},
	{ x: 20, y: 10, z: 0},
	{ x: 15, y: 5, z: 0},
	{ x: 20, y: 5, z: 0},
	{ x: 15, y: 0, z: 0}
];
var д = [
	{ x: 25, y: 10, z: 0},
	{ x: 30, y: 10, z: 0},
	{ x: 30, y: 0, z: 0},
	{ x: 25, y: 0, z: 0},
	{ x: 25, y: 5, z: 0},
	{ x: 30, y: 5, z: 0}
];
var а = [
	{ x: 35, y: 0, z: 0},
	{ x: 35, y: 10, z: 0},
	{ x: 40, y: 5, z: 0},
	{ x: 40, y: 0, z: 0},
	{ x: 40, y: 5, z: 0},
	{ x: 35, y: 5, z: 0}
];

var letter1 = new THREE.Line(makeLetter(п), material);
scene.add(letter1);
var letter2 = new THREE.Line(makeLetter(и), material);
scene.add(letter2);
var letter3 = new THREE.Line(makeLetter(з), material);
scene.add(letter3);
var letter4 = new THREE.Line(makeLetter(д), material);
scene.add(letter4);
var letter5 = new THREE.Line(makeLetter(а), material);
scene.add(letter5);

function makeLetter(dots) {
	var geometry = new THREE.Geometry();

	for (var i = dots.length - 1; i >= 0; i--) {
		geometry.vertices.push(new THREE.Vector3(dots[i].x, dots[i].y, dots[i].z));
	}

	return geometry;
}

function checkCompatibility() {
	if (Detector.webgl) {
			// Initiate function or other initializations here
			animate(letter1, 0.01, 0.01, 0.01);
			animate(letter2, 0.01, 0.01, 0.01);
			animate(letter3, 0.01, 0.01, 0.01);
			animate(letter4, 0.01, 0.01, 0.01);
			animate(letter5, 0.01, 0.01, 0.01);
			animate(cube, 0.06, 0.06, 0.06);
	} else {
			var warning = Detector.getWebGLErrorMessage();
			document.getElementById('container').appendChild(warning);
	}
}

function animate(figure, x, y, z) {
	if(figure) {
		if(x) figure.rotation.x += x;
		if(y) figure.rotation.y += y;
		if(z) figure.rotation.z += z;
	}
}

function render() {
	requestAnimationFrame( render );

	checkCompatibility();

	renderer.render( scene, camera );
}
render();





