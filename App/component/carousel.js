import React from 'react';
import { View, Text, FlatList, ScrollView,Dimensions } from 'react-native';
import CarouselItem from './carouselItem';
import { fetchData } from "./../service";
import { useEffect, useState, useRef } from 'react';
// Working Carousel logic, from kishan code, kishan is great coder, need to learn more carousel logic to do more advance stuff
const windowWidth=Dimensions.get('window').width;

const Carousel = ({ navigation,dataVal }) => {
    const flatList = useRef();
    const currentIndex = useRef(0);

    // Auto Scroll Logic
    // Infintie Scroll Logic
    const makeFlatListScollable = (len) => {
        setInterval(() => {
            flatList.current?.scrollToIndex({ animated: true, index: (currentIndex.current + 1) % len }); //Not working
            currentIndex.current = (currentIndex.current + 1) % len;
            //console.log("Inside scrollable list" + currentIndex.current);
        }, 3000);
    }

    useEffect(() => { 
        makeFlatListScollable(20); //Working Scrollable with infinite and auto scroll
    }, []);

    const handleScroll = (x) => {
        let index = Math.floor(x / windowWidth);
        currentIndex.current = index
    }

    return (

        <View>
            <FlatList
                ref={flatList}
                data={dataVal}
                onScroll={(e) => { handleScroll(e.nativeEvent.contentOffset.x) }}
                scrollEventThrottle={100}
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