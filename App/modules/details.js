import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const image = require('./../images/sharp_south_white_18dp.png');

const Detail = ({ route, navigation }) => {
    const param = route.params;
    // if (param) {
    //     console.log(param.id)
    // }

    // ViewPager(Tab layout) + API + some js and stylesheet
    return (
        <View>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={image} style={styles.image} />
                </TouchableOpacity>
            </View>

            <Text style={{ color: 'white' }}>Details Page</Text>
        </View>
    )
}

export default Detail;

const styles = StyleSheet.create({
    image: {
        height: 50,
        width: 50
    },
    imageContainer: {
        alignItems: 'flex-end',
        marginTop: 48,
        marginRight: 16
    }
})