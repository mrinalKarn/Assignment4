import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import CarouselItem from './carouselItem';
import { fetchData } from "./../service";
import { useEffect, useState ,useRef} from 'react';

const Carousel = ({ navigation }) => {
    const [data, setData] = useState([]);

    // Auto Scroll Logic
    // Infintie Scroll Logic

    let url = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
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
            setData(arr);
        })
    }, []);

    return (

        <View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <CarouselItem item={item} index={index} navigation={navigation} />
                )}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Carousel;