import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

function Webgl() {

    const meshRef = useRef<THREE.Mesh>(null)

    useFrame(({ mouse }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = mouse.x * Math.PI / 2
            meshRef.current.rotation.y = mouse.y * Math.PI / 2
        }
    }
    )

    return (
        <mesh ref={meshRef}  >
            <torusGeometry args={[5, 1, 20, 100]} />
            <meshStandardMaterial />
        </mesh>
    );
}

export default Webgl;