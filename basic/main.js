import * as THREE from 'three';

//create the scene

const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// add the camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1);

camera.position.z = 5;

//create and dd a cube object


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color:'#468585', emissive:'#468585'});

const cube = new THREE.Mesh(geometry, material);;
scene.add(cube);

//add lighting


const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1,1,1);
scene.add(light);

//set up the renderer


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//animate the scene 

renderer.render(scene, camera);