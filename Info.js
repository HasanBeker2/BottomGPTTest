import React from 'react';
import { View, Text } from 'react-native';

const InfoScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style ={{fontSize:25,fontWeight:'bold'}}>This is the Info Screen</Text>
        </View>
    );
};

export default InfoScreen;