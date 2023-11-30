import * as THREE from 'three';

const renderer = new THREE.WebGL1Renderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

export default renderer;