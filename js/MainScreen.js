import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    PixelRatio,
    TouchableHighlight,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    InteractionManager,
} from 'react-native'
import {
    ViroARSceneNavigator,
} from '@citychallenge/react-viro';
import { RFPercentage } from "react-native-responsive-fontsize"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import SceneAR from './SceneAR'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/core';
import { RES_DIR } from './constrant';

/*
 TODO: Insert your API key below
 */
var sharedPropsObj = {
    apiKey: "API_KEY_HERE",
}

export default function () {
    const UNSET = "UNSET";
    const AR_NAVIGATOR_TYPE = "AR";

    const defaultNavigatorType = UNSET;

    const navigation = useNavigation()

    const imgAnimal = require('./res/images/animal.jpg')
    const imgPlant = require('./res/images/plant.jpg')
    const imgVehicle = require('./res/images/vehicle.jpg')

    const [activeIndex, setActiveIndex] = useState(0)
    const [navigatorType, setNavigatorType] = useState(defaultNavigatorType)
    const [sharedProps, setSharedProps] = useState(sharedPropsObj)

    const categories = [
        {
            id: 'animal',
            name: 'Động vật',
            items: [
                { id: 'dog', name: 'Chó', imageURL: `${RES_DIR}/images/animal.jpg` },
                { id: 'bird', name: 'Chim', imageURL: `${RES_DIR}/images/animal.jpg` },
                { id: 'cat', name: 'Mèo', imageURL: `${RES_DIR}/images/animal.jpg` },
                { id: 'fish', name: 'Cá', imageURL: `${RES_DIR}/images/animal.jpg` },
                { id: 'dolphin', name: 'Cá heo', imageURL: `${RES_DIR}/images/animal.jpg` }
            ]
        },
        {
            id: 'vehicle',
            name: 'Phương tiện giao thông',
            items: [
            ]
        },
        {
            id: 'plant',
            name: 'Thực vật',
            items: [
            ]
        },
    ]

    function chooseImage(value) {
        switch (value) {
            case 'animal':
                return imgAnimal
            case 'plant':
                return imgPlant
            default: return imgVehicle
        }
    }

    const renderItem = ({ item, index }) => {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableHighlight style={{ width: '85%', height: '100%', borderRadius: wp(3), overflow: 'hidden' }}
                    underlayColor={'#68a0ff'}
                    onPress={() => { navigation.navigate('Chooser', { category: item }) }}>
                    <ImageBackground source={chooseImage(item.id)} style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row', }}>
                        <View style={{ width: '100%', height: '30%', backgroundColor: 'rgba(0,0,0,.4)', justifyContent: 'center', alignItems: 'center' }}>
                            <Text numberOfLines={1} style={{ color: '#fff', fontSize: RFPercentage(3.5), fontFamily: 'MarkerFelt-Thin', paddingHorizontal: wp(2) }}>{item.name}</Text>
                        </View>
                    </ImageBackground>
                </TouchableHighlight>
            </View>
        )
    }

    const _getExperienceSelector = () => {
        return (
            <>
                <View style={localStyles.outer} >
                    <View style={localStyles.inner} >

                        <Text style={localStyles.title1}>
                            Augmented Reality
                        </Text>
                        <Text style={localStyles.title2}>
                            AR TEACHING
                        </Text>
                        <Text style={localStyles.title3}>
                            Teaching with AR
                        </Text>

                        <View style={{ width: '100%', minHeight: hp(40), marginTop: hp(10) }}>
                            <Text style={localStyles.titleText}>
                                Chọn một chủ đề:
                            </Text>
                            <Carousel
                                data={categories}
                                renderItem={renderItem}
                                sliderWidth={wp(100)}
                                itemWidth={wp(100)}
                                onSnapToItem={setActiveIndex}
                                layout='stack'
                                layoutCardOffset={10}
                            />
                            <Pagination
                                // containerStyle={{}}
                                dotsLength={categories.length}
                                activeDotIndex={activeIndex}
                                dotStyle={{ backgroundColor: '#fff' }}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                            />
                        </View>

                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
                    <Text style={[localStyles.textAuthor, { fontWeight: 'normal' }]}>Made by</Text>
                    <Text style={localStyles.textAuthor}>Lieu Minh Tri</Text>
                    <Text style={localStyles.textAuthor}>Tran Thi Huynh Hoa</Text>
                </View>
            </>
        );
    }

    // if (navigatorType === defaultNavigatorType) {
    //     return _getExperienceSelector()
    // } else if (navigatorType === AR_NAVIGATOR_TYPE) {
    //     return _getARNavigator()
    // }
    return _getExperienceSelector()

    function _getARNavigator() {
        return (
            <React.Fragment>
                <View style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, width: '100%', height: '100%' }}>
                    <ViroARSceneNavigator viroAppProps={sharedProps}
                        initialScene={{ scene: SceneAR }}
                        style={{ width: '100%', height: '100%' }} />

                    <Icon name="chevron-left" size={wp(5)} color="#fff"
                        onPress={() => setNavigatorType(defaultNavigatorType)}
                        style={{ position: 'absolute', margin: wp(3), zIndex: 1 }} />
                </View>
            </React.Fragment>
        );
    }
}

const localStyles = StyleSheet.create({
    viroContainer: {
        flex: 1,
        backgroundColor: "black",
    },
    outer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "black",
    },
    inner: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "black",
    },
    titleText: {
        paddingTop: 10,
        paddingBottom: 10,
        color: '#fff',
        textAlign: 'center',
        fontSize: RFPercentage(3),
        fontFamily: 'Times New Roman'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    buttons: {
        height: '100%',
        width: '85%',
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    exitButton: {
        height: 50,
        width: 100,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    title1: {
        fontFamily: 'Iowan Old Style',
        fontSize: RFPercentage(2.5),
        color: 'yellow'
    },
    title2: {
        fontFamily: 'IowanOldStyle-Bold',
        fontSize: RFPercentage(5),
        color: '#68a0cf',
        fontWeight: 'bold'
    },
    title3: {
        fontFamily: 'AppleSDGothicNeo-Light',
        fontSize: RFPercentage(2),
        color: '#fff'
    },
    textAuthor: {
        fontFamily: 'Verdana',
        fontSize: RFPercentage(1.5),
        color: '#fff',
        fontWeight: 'bold'
    }
});