

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// antialias makes edges look more sharp
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
const loader = new THREE.TextureLoader();

const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
const materials = [
    new THREE.MeshBasicMaterial({ map: loader.load('img2.jpg') }),
    new THREE.MeshBasicMaterial({ map: loader.load('img3.jpg') }),
    new THREE.MeshBasicMaterial({ map: loader.load('img4.jpg') }),
    new THREE.MeshBasicMaterial({ map: loader.load('img5.jpg') }),
    new THREE.MeshBasicMaterial({ map: loader.load('img6.jpg') }),
    new THREE.MeshBasicMaterial({ map: loader.load('img7.jpg') })];

    const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

camera.position.z = 5;



function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}


animate();