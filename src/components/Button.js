import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return ( 
        // aqui onPress llamo a la funcion whenPress q esta 
        // declarada en AlbumDetail.js
        <TouchableOpacity onPress={whenPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 16, 
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1, 
        alignSelf: 'center',
        backgroundColor: '#574352',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#574352',
        width: 200,
        marginTop: 50,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3, 
    }
};

export default Button;
