import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshStandardMaterial({color: 0x00f00})
const cube = new THREE.Mesh(geometry, material)
cube.name = 'cube'

export default cube;