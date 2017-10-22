import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album, children }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        headerTextStyle, 
        thumbImageStyle, 
        headerContentStyle, 
        thumbContainerStyle,
        imageStyle 
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbContainerStyle}>
                    <Image 
                        style={thumbImageStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle} 
                    source={{ uri: image }} 
                />
            </CardSection>
            <CardSection>
                <Button click={() => Linking.openURL(url)}>
                    {children}
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbImageStyle: {
        height: 50,
        width: 50
    },
    thumbContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
