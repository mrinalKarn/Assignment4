import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView ,Dimensions} from 'react-native';
import Carousel from './../component/carousel';
import HorizontalView from './../component/horizontalView';
import { useEffect, useState } from 'react';
const windowHeight = Dimensions.get('window').height;
import {fetchData, fetchPopular} from './../service';
import { ActivityIndicator } from 'react-native';

const Home = ({navigation}) => {
    const [dataCarousel, setDataCarousel] = useState([]);
    const [dataHorizontal,setDataHorizontal] = useState([]);
    let url = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        // Carousel Data
        fetchData().then(val => {
            let arr = [];
            val.results.map(val => {
                var obj = {
                    title: val.original_title,
                    id: val.id,
                    genre: "Suspense",
                    rating: val.vote_average,
                    description: val.overview,
                    image: url + val.poster_path,
                    bgImage: url + val.backdrop_path
                }
                arr.push(obj);
            })
            setDataCarousel(arr);
           //makeFlatListScollable(20);
        })
        // Horizonatal View Data
        fetchPopular().then(val => {
            let arr = [];
            val.results.map(val => {
                var obj = {
                    title : val.original_title,
                    id:val.id,
                    genre : "Suspense",
                    rating : val.vote_average,
                    description :val.overview,
                    image : url+val.poster_path,
                    bgImage:url+val.backdrop_path
                }
                arr.push(obj);
            })
            setDataHorizontal(arr);
        })
    }, []);

    if(!dataCarousel && !dataHorizontal) {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color="red"/>
            </View>
        )
    }

    else return (
        <ScrollView>
            <View style={{height:windowHeight}}> 
                <Carousel navigation={navigation} dataVal={dataCarousel}/>
                <View style={styles.div}>
                    <Text style={styles.popular}>Popular</Text>
                    <Text style={styles.seeAll} onPress={()=>navigation.navigate('List',{title:"Popular",url:"https://api.themoviedb.org/3/movie/popular?api_key=9fd87a5b6d4b869c248693c5a8126ae3&language=en-US&page="})}>See all</Text>
                </View>
                <HorizontalView navigation={navigation} dataVal={dataHorizontal}/>
                <View style={{ flexDirection: 'row',marginTop:8}}>
                    <Image source={{ uri: "https://github.com/oyo-kishan/MovieApp/blob/master/images/play.png?raw=true" }} style={styles.topImage} />
                    <Text style={styles.topText} onPress={()=>navigation.navigate('List',{title:"Now Playing",url:"https://api.themoviedb.org/3/movie/now_playing?api_key=9fd87a5b6d4b869c248693c5a8126ae3&language=en-US&page=1"})}>Now Playing</Text>
                </View >
                <View style={{ flexDirection: 'row',marginTop:4 }}>
                    <Image source={{ uri: "https://github.com/oyo-kishan/MovieApp/blob/master/images/trending.png?raw=true" }} style={styles.image} />
                    <Text style={styles.text} onPress={()=>navigation.navigate('List',{title:"Top Rated",url:"https://api.themoviedb.org/3/movie/top_rated?api_key=9fd87a5b6d4b869c248693c5a8126ae3&language=en-US&page=1"})}>Top Rated</Text>
                </View>
                <View style={{ flexDirection: 'row',marginTop:4 }}>
                    <Image source={{ uri: "https://github.com/oyo-kishan/MovieApp/blob/master/images/upcoming.png?raw=true" }} style={styles.image} />
                    <Text style={styles.text} onPress={()=>navigation.navigate('List',{title:"Upcoming",url:"https://api.themoviedb.org/3/movie/upcoming?api_key=9fd87a5b6d4b869c248693c5a8126ae3&language=en-US&page=1"})}>Upcoming</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
   
    div: {
        flexDirection: 'row',
        marginTop: 28,
        marginBottom:4
    },
    popular: {
        alignItems: 'flex-start',
        flexGrow: 1,
        marginLeft: 18,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    seeAll: {
        alignItems: 'flex-end',
        marginRight: 28,
        fontSize: 16,
        color: 'white',
        fontSize: 20
    },
    text: {
        marginLeft: 12,
        fontSize: 18,
        color: 'white',
        marginTop: 12
    },
    image: {
        height: 16,
        width: 16,
        marginLeft: 24,
        marginTop: 16
    },
    topText: {
        marginTop: 28,
        marginLeft: 12,
        fontSize: 18,
        color: 'white'
    },
    topImage: {
        marginTop: 32,
        height: 16,
        width: 16,
        marginLeft: 24
    }
})
