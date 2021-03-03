import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Environment, Plane, Sky, Stars } from '@react-three/drei';

import TRX2 from '../models/TRX2RX';
import Model from '../models/Scene';
// import SkyBox from './SkyBox';
// import Floor from '../models/Floor';

const MajorComponents = () => {
	return (
		<Canvas pixelRatio={[1, 2]} camera={{ position: [-90, 0, 0], fov: 60 }}>
			<OrbitControls maxPolarAngle={Math.PI / 2} maxZoom={60} minZoom={40} />
			<ambientLight intensity={1} />
			<pointLight position={[10, 10, 10]} />
			{/* <axisHelper /> */}
			<Suspense fallback={null}>
				<Environment files="royal_esplanade_1k.hdr" />
				{/* <Sky
				sunPosition={[0, 0.5, 0]}
				/> */}
				{/* <Stars /> */}
				{/* <SkyBox /> */}
				<TRX2 position={[-65, -4.1, -3]} />
				{/* <Plane position={[0, -5, 0]} args={[100, 100]} attach="material" rotation={[-Math.PI / 2, 0, 0]}>
					<meshBasicMaterial color="#fff" />
				</Plane> */}
				<Model rotation={[0, Math.PI * 2.1, 0]} position={[0, -10, 0]} scale={[0.1, 0.1, 0.1]} />
			</Suspense>
		</Canvas>
	);
};

export default MajorComponents;
