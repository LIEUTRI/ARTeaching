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
    Dimensions
} from 'react-native'
import {
    ViroARSceneNavigator,
} from '@citychallenge/react-viro';
import { RFPercentage } from "react-native-responsive-fontsize"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import SceneAR from '../SceneAR';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width

export default function ({route}) {
    const {id} = route.params
    const navigation = useNavigation()
    const [scrollValue, setScrollValue] = useState(0)

    let tempX = 0
    function handleScroll(event) {
        let x = event.nativeEvent.contentOffset.x
        if (x > tempX) {
            console.log('Left');
        } else if (x < tempX) {
            console.log('Right');
        }
        tempX = x

        setScrollValue(x)
    }

    React.useEffect(() => {
        console.log('[id] ', id);
    })

    return (
        <React.Fragment>
            <View style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, width: '100%', height: '100%' }}>
                <TouchableOpacity style={{ width: wp(10), height: wp(10), position: 'absolute', margin: wp(2), zIndex: 1, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={wp(5)} color="#fff"
                        style={{ marginTop: 0 }} />
                </TouchableOpacity>

                <ViroARSceneNavigator viroAppProps={{
                    childName: scrollValue,
                    onChangeName: setScrollValue,
                    id: id
                }}
                    initialScene={{ scene: SceneAR }}
                    style={{ width: '100%', height: '100%' }} />

                <View style={{ width: '100%', height: hp(7), marginTop: -hp(7), backgroundColor: 'rgba(0,0,0,.2)' }}>
                    <ScrollView horizontal={true} onScroll={handleScroll}
                        scrollEventThrottle={screenWidth}
                        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                        // contentOffset={[screenWidth / 2, 0]}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{ width: screenWidth * 2, height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler, { color: 'transparent' }]}>{'|'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler, { color: 'transparent' }]}>{'|'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler, { color: 'transparent' }]}>{'|'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler, { color: 'transparent' }]}>{'|'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler]}>{'-180°'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler, { color: 'transparent' }]}>{'|'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler]}>{'-90°'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler, { color: 'transparent' }]}>{'|'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler, { color: '#396df3', fontSize: wp(2.5) }]}>{'0'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler, { color: 'transparent' }]}>{'|'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler]}>{'90°'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler, { color: 'transparent' }]}>{'|'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler]}>{'180°'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler, { color: 'transparent' }]}>{'|'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler, { color: 'transparent' }]}>{'|'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler, { color: 'transparent' }]}>{'|'}</Text>
                            </View>
                            <View style={localStyles.ruler}>
                                <Text style={[localStyles.textRuler]}>{'|'}</Text>
                                <Text style={[localStyles.textRuler, { color: 'transparent' }]}>{'|'}</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ zIndex: -10, marginTop: -hp(2), width: '100%', height: hp(2), alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={{ color: '#fff', fontSize: wp(2) }}>|</Text>
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
}

const localStyles = StyleSheet.create({
    ruler: {
        width: screenWidth / 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textRuler: {
        fontSize: wp(2),
        color: '#fff'
    }
})