import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

import TRX2 from '../models/TRX2RX';

const MajorComponents = () => {
	return (
		<Canvas pixelRatio={[1, 2]} camera={{ position: [-5, 0, 0] }}>
			<OrbitControls />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Suspense fallback={null}>
				<TRX2 position={[0, 0, 0]} />
			</Suspense>
		</Canvas>
	);
};

export default MajorComponents;
