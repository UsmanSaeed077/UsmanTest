import React from 'react';
import { Image, StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';
import NormalText from '../AppText/NormalText';
import LinearGradient from 'react-native-linear-gradient';
import THEME from '../../assets/theme/dark.json'
import TextGradient from '@furkankaya/react-native-linear-text-gradient';
import { AppImages } from '../../constants/AppImages';

interface Props {
    disabled?: boolean,
    text: string,
    onPress: CallableFunction,
    customStyle?: StyleProp<ViewStyle>,
    txtStyle?: any,
}

function AppButton({ disabled, text, customStyle, txtStyle, onPress }: Props) {
    return (
        <TouchableOpacity onPress={() => onPress && onPress()}
            disabled={disabled}
            activeOpacity={0.7}
            style={[styles.container, customStyle]}
        >
            <TextGradient
                style={styles.txtStyle}
                locations={[0, 1]}
                colors={THEME.text.gradient}
                start={{ x: 1, y: 0 }}
                end={{ x: 2, y: 2 }}
                text={text}
            />

            <Image
                source={AppImages.doubleRigtChevron}
                resizeMode='contain'
                style={styles.trailingIconStyle}
            />
        </TouchableOpacity>
    );
}

export default AppButton;