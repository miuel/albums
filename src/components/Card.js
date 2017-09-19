import React from 'react';
import { View } from 'react-native';

const Card = (props) => 
    (
        // me traigo las propiedas q tiene el hijo (AlbumDetail)
        <View style={styles.containerStyle}>            
            {props.children}
        </View>
    );

const styles = {
    containerStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20
    }
};

export default Card;
