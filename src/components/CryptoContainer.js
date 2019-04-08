import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends React.Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }

    render() {
        return (
            <View>
                <Text>{CoinCard}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, {FetchCoinData})(CryptoContainer);