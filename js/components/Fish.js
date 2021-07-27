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
    const [scale, setScale] = useState(0.4)
    const [position, setPosition] = useState([0, 0, -4])
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
                    source={require('../res/animal/fish/fish.obj')}
                    resources={[require('../res/animal/fish/12265_Fish_v1_L2.mtl'),
                    require('../res/animal/fish/fish.jpg'),
                    ]}
                    position={position}
                    scale={[scale / 4, scale / 4, scale / 4]}
                    type="OBJ"
                    rotation={[-90, rotateY, 0]}
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
                    source={SOUND.fish}
                    loop={false}
                    volume={1}
                    onFinish={_onFinish}
                    onError={_onErrorSound} />}
            </ViroNode>

        </>
    )
}