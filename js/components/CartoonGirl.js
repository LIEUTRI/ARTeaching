import React, { useState } from 'react'
import {
    Viro3DObject,
    ViroAnimatedComponent,
    ViroAnimatedImage,
    ViroAnimations,
    ViroARScene,
    ViroFlexView,
    ViroImage,
    ViroMaterials,
    ViroNode,
    ViroSound,
    ViroSpatialSound,
    ViroText,
} from '@citychallenge/react-viro';
import { SOUND } from '../constrant';

export default function ({ data }) {
    const [sound, setSound] = useState(false)
    const [scale, setScale] = useState(0.6)
    const [position, setPosition] = useState([0, -1, -1])
    const [rotateY, setRotateY] = useState(0)
    const [scrollValue, setScrollValue] = useState(0)

    const _rotate = () => {
        if (data > rotateY) {
            setRotateY(oldDegree => oldDegree + 1)
        } else if (data < rotateY) {
            setRotateY(oldDegree => oldDegree - 1)
        }
    }
    const _onRotate = (state, rotationFactor, source) => {
        if (state == 2) {
            console.log(`[_onRotate ${source}] rotationFactor: ${rotationFactor}`);
            if (rotationFactor > rotateY) {
                setRotateY(oldDegree => oldDegree + 1)
            } setRotateY(oldDegree => oldDegree - 1)
        }
    }
    const _onPinch = (pinchState, scaleFactor, source) => {
        if (pinchState == 2) {
            console.log(`[_onPinch ${source}] scaleFactor: ${scaleFactor}`);
            if (scaleFactor > scale + 0.5) {
                setScale(oldScale => oldScale + 0.008)
            } else if (scaleFactor < scale + 0.5) {
                setScale(oldScale => oldScale - 0.008)
            }
        }
    }
    const _onClick = (position, source) => {
        console.log(`[_onClick ${source}] pos: ${position}`);
        setSound(!sound)
    }
    const _onTouch = (state, position, source) => {
        console.log(`[_onTouch ${source}] ${state}`);

        var touchX = position[0];
        var touchY = position[1];
        if (state == 1) {
            // Touch Down 
        } else if (state == 2) {
            // Touch Down Move 
        } else if (state == 3) {
            // Touch Up 
            console.log(`[_onTouch] pos: ${touchX},${touchY}`);
            setSound(true)
        }


        // let press = false
        // if (state == 1) {
        //     press = true
        // } else if (state == 2) {
        //     press = false
        // }

        // if (press) {
        //     console.log(`[_onTouch] pos: ${position}`);
        //     console.log(`[_onTouch] src: ${source}`);
        //     setSound(true)
        // }
    }
    const _onSwipe = (state, source) => {
        console.log(`[_onSwipe ${source}] state: ${state}`);
    }
    const _onScroll = (scrollPos, source) => {
        // scrollPos[0]: x scroll position from 0.0 to 1.0. 
        // scrollPos[1]: y scroll position from 0.0 to 1.0. 
        console.log(`[_onScroll ${source}] scrollPos: ${scrollPos[0]},${scrollPos[1]}`);
    }
    const _onErrorSound = () => {
        console.log('[ErrorSound]');
    }
    const _onFinish = () => {
        setSound(false)
        console.log('[_onFinish] ');
    }

    React.useEffect(() => {
        console.log('[cartoongirl] init');
    }, [])

    React.useEffect(() => {
        // if(data > rotateY){
        //     setRotateY(oldDegree => oldDegree+10)
        // } else if(data < rotateY){
        //     setRotateY(oldDegree => oldDegree-10)
        // }
        setRotateY(data)
    }, [data])

    return (
        <>
            <ViroNode>
                <Viro3DObject
                    source={require('../res/person/cartoongirl/cartoongirl.vrx')}
                    resources={[require('../res/person/cartoongirl/Material.004_Base_Color.jpg'),
                    require('../res/person/cartoongirl/Material.004_Height.jpg'),
                    require('../res/person/cartoongirl/Material.004_Metallic.jpg'),
                    require('../res/person/cartoongirl/Material.004_Metallic.jpg'),
                    require('../res/person/cartoongirl/Material.004_Normal.jpg'),
                    require('../res/person/cartoongirl/Material.004_Roughness.jpg'),
                    require('../res/person/cartoongirl/Material.005_Base_Color.jpg'),
                    require('../res/person/cartoongirl/Material.005_Height.jpg'),
                    require('../res/person/cartoongirl/Material.005_Metallic.jpg'),
                    require('../res/person/cartoongirl/Material.005_Normal_OpenGL.jpg'),
                    require('../res/person/cartoongirl/Material.005_Normal.jpg'),
                    require('../res/person/cartoongirl/Material.005_Roughness.jpg')
                    ]}
                    position={position}
                    scale={[scale / 2, scale / 2, scale / 2]}
                    type="VRX"
                    rotation={[0, rotateY, 0]}
                    dragType="FixedToWorld"
                    // dragType="FixedToPlane"
                    dragPlane={{
                        planePoint: position,
                        planeNormal: position,
                        maxDistance: 1
                    }}
                    /////////////////////////////
                    onDrag={() => { }}
                    onPinch={_onPinch}
                    onClick={_onClick}
                    // onRotate={_onRotate}
                    onTouch={_onTouch}
                    onSwipe={_onSwipe}
                    onScroll={_onScroll}
                />
                {sound && <ViroSpatialSound rolloffModel='none'
                    paused={false} muted={false}
                    minDistance={3} maxDistance={5}
                    position={position}
                    source={SOUND.dog}
                    loop={false}
                    volume={1}
                    onFinish={_onFinish}
                    onError={_onErrorSound} />}
            </ViroNode>

            {/* <ViroNode>
                <ViroFlexView
                    materials="card"
                    height={4}
                    width={4.5}
                    position={[0, 0, -10]}>
                    <ViroImage
                        height={2}
                        width={3.5}
                        source={require("../res/hh.jpg")}
                    />
                    <ViroAnimatedImage
                        style={{ marginLeft: 0.2 }}
                        height={0.9}
                        width={1.5}
                        source={require("../res/hh.jpg")}
                    />
                </ViroFlexView>
                <ViroFlexView
                    height={3}
                    width={3.5}
                    position={[-5, 0, -10]}>
                    <ViroImage
                        opacity={0.95}
                        height={3}
                        width={3.5}
                        source={require("../res/hh.jpg")}
                    />
                </ViroFlexView>
                <ViroSpatialSound source={require("../res/audio/dog_barking.wav")} />
            </ViroNode> */}

        </>
    )
}