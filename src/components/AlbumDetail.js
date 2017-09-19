import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ albumProp }) => {
    //hago un destructuring para no repetir las propiedades que tengo en albumProp
    const { title, artist, thumbnail_image, image, url } = albumProp;
    // lo mismo con los estilos y no repito tanto la palabra styles
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        headerTitle, 
        headerArtist, 
        thumbnailContainerStyle,
        imageStyle
        } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        source={{ uri: thumbnail_image }} 
                        style={thumbnailStyle} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTitle}>{title}</Text>
                    <Text style={headerArtist}>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                        source={{ uri: image }} 
                        style={imageStyle} 
                />
            </CardSection>
                <Button 
                        // con Linking puedo acceder a una web en este caso url tiene el enlace
                        // al album en Amazon.com. la prop url esta en el array
                        whenPress={() => Linking.openURL(url)} 
                >
                    Buy Now !
                </Button>
        </Card>
    );
};

// declaro una const para usar luego en los estilos (thumbnailStyle)
const AVATAR_SIZE = 60;

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 20,
    },
    headerTitle: {
        color: '#6C6964',
        fontSize: 20,
    },
    headerArtist: {
        color: '#F2EFE1',
        fontSize: 16,
    }, 
    thumbnailStyle: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE / 2,
        marginTop: 10,
        marginBottom: 10,
    }, 
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
};

export default AlbumDetail;
