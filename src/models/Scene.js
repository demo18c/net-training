/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: challe3d (https://sketchfab.com/challe3d)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/bd3d3d8afa3c4a5097d3d22911d6a921
title: Large militery tent
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Tent(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/scene.gltf');
	return (
		<group ref={group} {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh material={materials.Ropes} geometry={nodes.defaultMaterial.geometry} />
					<mesh material={materials.Base} geometry={nodes.defaultMaterial_1.geometry} />
					<mesh material={materials.Woodsupport} geometry={nodes.defaultMaterial_2.geometry} />
					<mesh material={materials.Pillar} geometry={nodes.defaultMaterial_3.geometry} />
					<mesh material={materials.Tentroof} geometry={nodes.defaultMaterial_4.geometry} />
				</group>
			</group>
		</group>
	);
}

useGLTF.preload('/scene.gltf');
