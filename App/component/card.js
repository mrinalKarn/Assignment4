import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Card = ({ item }) => {
    const url = "https://image.tmdb.org/t/p/w500"+item.poster_path;
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={{uri : url}} style={styles.image}/>
                <View style={{margin:12}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginBottom:4}}>{item.title}</Text>
                    <Text style={{color:'grey',marginBottom:4}}>2021</Text>
                    <View style={{flexDirection:'row'}}>
                    <Image source={{uri :"https://github.com/oyo-kishan/MovieApp/blob/master/images/star.png?raw=true"}} style={styles.star}/>
                    <Text style={{color:'grey',marginBottom:6,marginTop:3}}>{item.vote_average}</Text>
                    </View>
                    <Text numberOfLines={3} ellipsizeMode="tail" style={{color:'grey',marginBottom:8,marginRight:150}}>{item.overview}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        height: windowHeight * 0.25,
        width: windowWidth,
        flexDirection:'row',
        margin:8,
        backgroundColor:'white'
    },
    image:{
        height:windowHeight * 0.25,
        width:windowWidth*0.35
    },
    star:{
        height: 13,
        width:13,
        marginTop:6,
        marginRight :4 
    }
})