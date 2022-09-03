const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5 );
const material = new THREE.MeshBasicMaterial( { color: 0x59d6ff, wireframe:true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

let keydown = []; //Inicia a varíavel que pega o input do teclado

window.onkeydown = function(e)
{ keydown[e.key] = true;}
window.onkeyup = function(e)
{ keydown[e.key] = false;}

 function animate() {
        requestAnimationFrame( animate );

        if(keydown["ArrowRight"]) cube.rotation.y += 0.01;
        if(keydown["ArrowLeft"]) cube.rotation.y -= 0.01;
        if(keydown["ArrowDown"]) cube.rotation.x += 0.01;
        if(keydown["ArrowUp"]) cube.rotation.x -= 0.01;
        

        renderer.render( scene, camera );
    };

    animate();