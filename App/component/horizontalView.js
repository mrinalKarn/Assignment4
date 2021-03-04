import React from 'react';
import { View, Text, FlatList } from 'react-native';
import HorizontalViewItem from './horizontalViewItem';
import { useEffect, useState } from 'react';
import {  fetchPopular} from "./../service";

const HorizontalView = ({navigation}) => {
    const [data, setData] = useState([]);

    const renderItem = ({ item }) => (
        <HorizontalViewItem item={item} navigation={navigation}/>
    );

    let url = "https://image.tmdb.org/t/p/w500";

    useEffect(()=>{
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
            setData(arr);
        })
    },[])

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
            />
        </View>
    )
}

export default HorizontalView;