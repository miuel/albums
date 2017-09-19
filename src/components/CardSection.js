import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => 
    (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

const styles = {
    containerStyle: {
        position: 'relative',
        padding: 5, 
        backgroundColor: '#C2B6AA',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
};

export default CardSection;
