import React, { useEffect } from 'react';
import { View, Text, FlatList,ActivityIndicator } from 'react-native';
import Card from './../component/card';
import { useState } from 'react/cjs/react.development';

const List = ({ route }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [dataTwo, setDataTwo] = useState([]);
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
    }
    // Error
    //  Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.
    //  To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    useEffect(()=>{
        const fetchAsync = async () => (await (await fetch(url + (page).toString())).json()).results;
        fetchAsync().then(val => { //Doubt this will cause a overflow of data in memory because infinite data is rendering a doubt, how to mange it
            setDataTwo(val);
            setData([...data].concat(val)); //Think logic of adding indicator when end reached
        });
    },[page])

    if(!data) {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color="red"/>
            </View>
        )
    }

    else return (
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