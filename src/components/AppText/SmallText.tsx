import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { styles } from './styles';

interface Props {
    text: string,
    customStyle?: StyleProp<TextStyle>,
}

function SmallText({ text, customStyle }: Props) {
    return (
        <Text style={[styles.smallTxtStyle, customStyle]}>
            {text}
        </Text>
    );
}

export default SmallText;