// import libs
import React from 'react';
import { Text, View } from 'react-native';

// make component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
);
};

// creating styles
const styles = {
    viewStyle: {
        backgroundColor: '#C1B6A9',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, 
        elevation: 2, 
        position: 'relative', 
        marginBottom: 6
    },
    textStyle: {
        fontSize: 22,
        color: '#FFF'
    }
};

// make the component available to other parts of the app
export default Header;
