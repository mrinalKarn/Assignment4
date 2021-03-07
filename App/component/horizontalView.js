import React from 'react';
import { View, Text, FlatList} from 'react-native';
import HorizontalViewItem from './horizontalViewItem';

const HorizontalView = ({navigation,dataVal}) => {

    const renderItem = ({ item }) => (
        <HorizontalViewItem item={item} navigation={navigation}/>
    );

    return (
        <View>
            <FlatList
                data={dataVal}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
            />
        </View>
    )
}

export default HorizontalView;