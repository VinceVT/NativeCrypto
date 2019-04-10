import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';
import { FlatList } from 'react-native-gesture-handler';
import { url, API_KEY } from './../Utils/Constants';

class CryptoContainer extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         data: []
    //     };
    // };

    // componentWillMount() {
    //     fetch(url, {
    //         qs: {
    //             start: 1,
    //             limit: 10,
    //             convert: 'USD'
    //         },
    //         headers: {
    //             'Accept': 'application/json',
    //             'X-CMC_PRO_API_KEY': API_KEY
    //         },
    //     })
    //     .then(response => { return response.json() })
    //     .then(data => {
    //         this.setState({
    //             data: data.data.map((d, index) => Object.assign({ key: index}, d) )
    //         });
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    componentWillMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards = () => {
        const { crypto } = this.props;
        return (crypto.data.map((coin) => {
            return (
                <CoinCard 
                    key={coin.name}
                    coin_name={coin.name}
                    symbol={coin.symbol}
                    price_usd={coin.price_usd}
                    percent_change_24h={coin.percent_change_24h}
                    percent_change_7d={coin.percent_change_7d}
                />
            )
        })
        )
    }
   


    render() {

        const { crypto } = this.props;
        const { contentContainer } = styles;

        // if (crypto.isFetching) {
        //     return (
        //         <View>
        //             <Spinner
        //                 visible={crypto.isFetching}
        //                 textContent={"Loading..."}
        //                 textStyle={{color: '#253145'}}
        //                 animation="fade"
        //             />
        //         </View>
        //     )
        // }
        return (
        <FlatList
            data={crypto.data}
            renderItem={({item}) => (
                <CoinCard 
                    key={item.name}
                    coin_name={item.name}
                    symbol={item.symbol}
                    price_usd={item.price_usd}
                    percent_change_24h={item.percent_change_24h}
                    percent_change_7d={item.percent_change_7d}
                />
            )}
        />
        )
        
    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
//export default CryptoContainer;