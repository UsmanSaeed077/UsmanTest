import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { styles } from './styles';

interface Props {
    text: string,
    customStyle?: StyleProp<TextStyle>,
    
}

function NormalText({ text, customStyle }: Props) {
    return (
        <Text style={[styles.txtStyle, customStyle]}>
            {text}
        </Text>
    );
}

export default NormalText;