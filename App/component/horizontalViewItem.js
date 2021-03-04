import React from 'react';
import { View, Text,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HorizontalViewItem = ({item,navigation}) => {
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
        <View style={styles.container}>
            <Image source={{uri:item.image}} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default HorizontalViewItem;

const styles = StyleSheet.create({
    container:{
        marginTop : 10,
        borderWidth:1,
        borderColor:'black',
        height:0.35*windowHeight,
        width:0.38*windowWidth,
        backgroundColor:'white',
        marginRight:8,
        borderRadius:4
    },
    image:{
        height:0.29*windowHeight
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        letterSpacing:1,
        marginTop:8
    }
})