import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Environment, Plane, Sky, Stars } from '@react-three/drei';

import TRX2 from '../models/TRX2RX';
import Tent from '../models/Scene';
import SkyBox from './SkyBox';
// import Floor from '../models/Floor';

const MajorComponents = () => {
	return (
		<Canvas pixelRatio={[1, 2]} camera={{ position: [-15, 0, 0] }}>
			{/* <OrbitControls /> */}
			<ambientLight intensity={1} />
			<pointLight position={[10, 10, 10]} />
			{/* <axisHelper /> */}
			<Suspense fallback={null}>
				<Environment files="royal_esplanade_1k.hdr" />
				{/* <Sky
				sunPosition={[0, 0.5, 0]}
				/> */}
				{/* <Stars /> */}
				<SkyBox />
				<TRX2 position={[-3, -2, 0]} />
				{/* <Plane position={[0, -2, 0]} args={[100, 100]} attach="material" rotation={[-Math.PI / 2, 0, 0]}>
					<meshBasicMaterial color="#7cfc00" />
				</Plane> */}
				<Tent rotation={[0, Math.PI / 2, 0]} scale={[20, 20, 20]} />
			</Suspense>
		</Canvas>
	);
};

export default MajorComponents;
