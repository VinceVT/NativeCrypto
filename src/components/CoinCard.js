import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from './../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex"
    },
    image: {
        height: 40,
        width: 40
    },
    bold: {
        fontWeight: "bold"
    }
})

const { container, image, bold } = styles;



const CoinCard = (props) => {
    <View style={container}>
        <Image style={image}
            source={{ uri: images[props.symbol] }} 
            />
        <Text>{props.symbol}</Text>
        <Text>{props.coin_name}</Text>
        <Text>{props.price_usd}<Text style={bold}></Text></Text>
        <Text>Mrkt Cap: {props.market_cap}</Text>
        <Text>Change past 24 hrs:{props.percent_change_24h}</Text>
        <Text>Change past 7 days:{props.percent_change_7d}</Text>
    </View>
}

export default CoinCard;