import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground,TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CarouselItem = ({ item,navigation,index }) => {
    const image = { uri: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" }

    return (
        <ImageBackground source={{ uri: item.bgImage }} style={styles.background} imageStyle={{ opacity: 0.4 }}>
            <View style={styles.container}>
                <Image
                    source={{
                        uri: item.image
                    }}
                    style={styles.image}
                />
                <View style={styles.data}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'white' }}>{item.title}</Text>
                    <Text style={{ color: 'white',marginTop:4,fontSize:12 }}>{item.genre}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image source={{uri :"https://github.com/oyo-kishan/MovieApp/blob/master/images/star.png?raw=true"}} style={styles.star}/>
                        <Text style={{ color: 'white',marginTop:4  }}>{item.rating}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' ,marginRight:60,marginTop:4 }}>
                        <Text numberOfLines={3} ellipsizeMode="tail" style={{ color: 'white' }}>{item.description}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Detail',{id:item.id})}>
                        <Text style={styles.buttonText}>View Details</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    )
}

export default CarouselItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: windowWidth,
        padding: 12,
        paddingRight: windowWidth * 0.2,
        height: windowHeight * 0.35,
        alignItems:'center'
    },
    background: {
        flex: 1,
    },
    image: {
        height: windowHeight * 0.28,
        width: windowWidth * 0.35,
        marginTop: 20,
        borderRadius: 4,
        resizeMode: 'cover',
    },
    data: {
        marginTop: 20,
        marginLeft: 8,
        marginRight: 8,
    },
    star:{
        height: 13,
        width:13,
        marginTop:6,
        marginRight :4 
    },
    button:{
        borderRadius:4,
        width:140,
        height:35,
        backgroundColor:'#c11818',
        marginTop:12
    },
    buttonText :{
        color: 'white',
        textAlign:'center',
        fontSize:16,
        marginTop:6
    }
})