import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroBox,
    ViroMaterials,
    Viro3DObject,
    ViroAmbientLight,
    ViroSpotLight,
    ViroARPlaneSelector,
    ViroNode,
    ViroSpatialSound,
    ViroOrbitCamera,
    ViroQuad,
} from '@citychallenge/react-viro';
import CartoonGirl from './components/CartoonGirl';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cat from './components/Cat';
import Dolphin from './components/Dolphin';
import Bird from './components/Bird';
import Fish from './components/Fish';

export default function (props) {
    var { apiKey, category, childName, id } = props.sceneNavigator.viroAppProps
    const [text, setText] = useState(`Initializing AR...`)
    const [data, setData] = useState()
    const [receiveValue, setReceiveValue] = useState(childName)

    useEffect(() => {
        console.log('[CATEGORY] ', category);
        console.log('[apiKey] ', apiKey);

        switch (category) {
            case 'animal':
                setData(<CartoonGirl data={receiveValue} onChange={setReceiveValue} />)
            default: setData(<CartoonGirl data={receiveValue} onChange={setReceiveValue} />)
        }

    }, [])

    function test() {
        console.log('okkkkkk');
    }
    useEffect(() => {
        console.log('[SceneAR]=> ', childName);
        setReceiveValue(childName)
    }, [childName])

    function chooseObj(id){
        switch(id){
            case 'dog': return <CartoonGirl data={receiveValue} onChange={setReceiveValue} />
            case 'cat': return <Cat data={receiveValue} onChange={setReceiveValue} />
            case 'dolphin': return <Dolphin data={receiveValue} onChange={setReceiveValue}/>
            case 'bird': return <Bird data={receiveValue} onChange={setReceiveValue}/>
            case 'fish': return <Fish data={receiveValue} onChange={setReceiveValue}/>
        }
    }

    return (
        <ViroARScene onTrackingUpdated={_onInitialized}>
            <ViroAmbientLight color="#ffffff" />
            <ViroText text={text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={localStyles.initTextStyle} />
            <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, 3]}
                position={[0, 3, -3]} color="rgba(0,0,0,0.5)" castsShadow={true} />
            {
                chooseObj(id)
            }
            {/* <CartoonGirl data={receiveValue} onChange={setReceiveValue} /> */}
            {/* <Cat data={receiveValue} onChange={setReceiveValue} /> */}
            {/* <Dolphin data={receiveValue} onChange={setReceiveValue}/> */}
            {/* <Bird data={receiveValue} onChange={setReceiveValue}/> */}
            {/* <Fish data={receiveValue} onChange={setReceiveValue}/> */}
            {/* <ViroSpatialSound rolloffModel='none'
                paused={false} muted={false}
                minDistance={5} maxDistance={8}
                position={[0, 0, 0]}
                source={require('./res/audio/dog_barking.wav')}
                loop={false}
                volume={1}
                onFinish={() => { }}
                onError={() => { console.log('error:::') }} /> */}
        </ViroARScene>
    )

    function _onInitialized(state, reason) {
        if (state == ViroConstants.TRACKING_NORMAL) {
            console.log('[_onInitialized] TRACKING_NORMAL');
            setText('')
        } else if (state == ViroConstants.TRACKING_NONE) {
            // Handle loss of tracking
            console.log('[_onInitialized] loss of tracking');
        }
    }
}

var localStyles = StyleSheet.create({
    initTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center',
    },
});