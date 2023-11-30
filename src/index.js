
import scene from './basic/Scene.js';
import camera from './basic/Camera.js';
import renderer from './basic/Renderer.js';
import cube from './basic/shapes/Cube.js';
import light from './basic/Light.js';
import resize from './basic/Resize.js';
import plane from './basic/shapes/Plane.js';
import keyListener from './basic/KeyListener.js';
import keycode from './basic/KeyCode.js';



scene.add(cube)
scene.add(light)
scene.add(plane)

camera.position.set(2,2,2)
camera.lookAt(cube.position)


function animate() {
	requestAnimationFrame( animate );
    if(keyListener.isPressed(keycode.Enter)) cube.rotation.y += 0.01 // valor medido en radianes
	renderer.render( scene, camera );
}
animate();


resize.start(renderer)
keyListener.start()
