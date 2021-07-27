import React, { useEffect, useState } from 'react'
import {
    View, Text, TouchableHighlight, StyleSheet, TouchableOpacity, ImageBackground
} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { FlatGrid } from 'react-native-super-grid'
import Icon from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IMAGES } from '../constrant';

export default function ({ route }) {
    const { category } = route.params
    const navigation = useNavigation()
    const [items, setItems] = useState([]);

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableHighlight onPress={() => navigation.navigate('AR', { id: item.id })}
                underlayColor='##357cf3' >
                <ImageBackground source={chooseImage(item.id)} style={[localStyles.itemContainer, { backgroundColor: 'blue' }]}>
                    <View style={{ backgroundColor: 'rgba(0,0,0,.3)', justifyContent: 'center', width: '100%', height: '35%', alignSelf: 'flex-end', padding: wp(2) }}>
                        <Text style={localStyles.itemName}>{item.name}</Text>
                        <Text style={localStyles.itemCode}>{item.id}</Text>
                    </View>
                </ImageBackground>
            </TouchableHighlight >
        )
    }

    function chooseImage(id){
        switch(id){
            case 'dog': return IMAGES.imageAnimal
            default: return IMAGES.imagePlant
        }
    }

    useEffect(() => {
        console.log('[item] ', category);
        setItems(category.items)
    }, [])

    return (
        <>
            <View style={{ width: '100%', height: hp(6.5), alignItems: 'center', flexDirection: 'row', backgroundColor: 'blue' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={{ height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Icon name="chevron-left" size={wp(5)} color="#fff"
                        style={{ marginTop: 0, marginHorizontal: wp(1.5) }} />
                    <Text style={{ color: '#fff', fontSize: wp(4) }}>Trang chủ</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text numberOfLines={1} style={{ color: '#fff', fontSize: wp(6), fontFamily: 'Times New Roman', paddingHorizontal: wp(1.5) }}>{category.name}</Text>
                </View>
            </View>
            {items.length > 0 && <FlatGrid
                itemDimension={130}
                data={items}
                contentContainerStyle={{ flex: 1 }}
                // staticDimension={300}
                // fixed
                spacing={10}
                renderItem={_renderItem}
            />}
        </>
    );
}

const localStyles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
})