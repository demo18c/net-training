import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

const Floor = () => {
	return (
		<mesh>
			<sphereBufferGeometry attach="geometry" args={[5, 5]} />
			<basicMeshMaterial attach="material" color="#171717" />
		</mesh>
	);
};

export default Floor;
