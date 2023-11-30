import * as THREE from 'three'

const light = new THREE.AmbientLight( 0x404040, 1000 );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 8);
directionalLight.position.set(-1,1,1)
light.add(directionalLight)

export default light;