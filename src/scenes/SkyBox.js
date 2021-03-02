import React from 'react';
import { CubeTextureLoader, WebGLCubeRenderTarget, RGBFormat, LinearMipmapLinearFilter } from 'three';
import { useThree, useFrame } from 'react-three-fiber';

function SkyBox() {
	const { scene } = useThree();
	const loader = new CubeTextureLoader();
	const texture = loader.load(['/posx.jpg', '/negx.jpg', '/posy.jpg', '/negy.jpg', '/posz.jpg', '/negz.jpg']);

	scene.background = texture;
	return null;
}

export default SkyBox;
