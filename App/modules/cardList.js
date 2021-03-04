import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import Card from './../component/card';
import { useState } from 'react/cjs/react.development';

const List = ({ route }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const url = route.params.url;

    const renderItem = ({ item }) => (
        <Card item={item} />
    );
    React.useEffect(() => {
        const fetchAsync = async () => (await (await fetch(url + page.toString())).json()).results;
        fetchAsync().then(val => setData(val));
    }, []);
  
    const handleLoadMore = () => {
        setPage(page+1);
        const fetchAsync = async () => (await (await fetch(url + (page+1).toString())).json()).results;
        fetchAsync().then(val => { //Doubt this will cause a overflow of data in memory because infinite data is rendering a doubt, how to mange it
            let arr = [...data];
            let newArr = arr.concat(val);
            setData(newArr);
        });
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                onEndReachedThreshold={0.5}
                initialNumToRender={10}
                onEndReached={handleLoadMore}
            />
        </View>
    )
}

export default List;