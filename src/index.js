
import scene from './basic/Scene.js';
import camera from './basic/Camera.js';
import renderer from './basic/Renderer.js';
import cube from './basic/shapes/Cube.js';
import light from './basic/Light.js';
import resize from './basic/Resize.js';
import plane from './basic/shapes/Plane.js';
import keyListener from './basic/KeyListener.js';
import keycode from './basic/KeyCode.js';

import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';



scene.add(cube)
scene.add(light)
scene.add(plane)

camera.position.set(5,5,5)


function animate() {
	requestAnimationFrame( animate );
    if(keyListener.isPressed(keycode.Enter)) cube.rotation.y += 0.01 // valor medido en radianes
	if(keyListener.isPressed(keycode.A)) cube.translateX(-.1)
	if(keyListener.isPressed(keycode.D)) cube.translateX(.1)
	if(keyListener.isPressed(keycode.W)) cube.translateZ(.1)
	if(keyListener.isPressed(keycode.S)) cube.translateZ(-.1)
	if(keyListener.isPressed(keycode.Space)) cube.translateY(.1)
	if(keyListener.isPressed(keycode.C)) cube.translateY(-.1)
	camera.lookAt(cube.position)
	renderer.render( scene, camera );
}
animate();


resize.start(renderer)
keyListener.start()
