// import library
import React from 'react';
import { View, Text } from 'react-native';


// add component
const Header = (props) => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// styles
const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        height: 60,
        marginTop: 20,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20,
        color: 'grey'
    }
};

export default Header;
