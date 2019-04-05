import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class CryptoContainer extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Container
                </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(CryptoContainer);