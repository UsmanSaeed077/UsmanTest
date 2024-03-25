import { View, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import { styles } from './styles';
import SmallText from '../AppText/SmallText';
import THEME from '../../assets/theme/dark.json'
import { AppImages } from '../../constants/AppImages';

interface Props {
    minValue: number,
    maxValue: number,
}

const AppSlider = ({ minValue, maxValue }: Props) => {

    const [disable, setDisable] = useState(false);
    const [bubbleValue, setBubbleValue] = useState("")

    const thumbScaleValue = useSharedValue(1);
    const progress = useSharedValue(700);
    const min = useSharedValue(minValue);
    const max = useSharedValue(maxValue);

    const isScrubbing = useRef(false);

    const onSlidingComplete = (e: number) => {
        isScrubbing.current = false;
    };
    const onSlidingStart = () => {
        isScrubbing.current = true;
    };

    const renderThumb = () => <Image source={AppImages.sliderThumb} resizeMode='contain' style={styles.sliderThumb} />

    const renderBubble = () => {
        return (
            <View style={styles.sliderBubble}>
                <SmallText text={bubbleValue.split('.')[0]} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <SmallText text={minValue.toString()} customStyle={styles.sliderRangeNumStyle} />
            <Slider
                style={styles.sliderStyle}
                disableTapEvent
                progress={progress}
                onSlidingComplete={onSlidingComplete}
                onSlidingStart={onSlidingStart}
                minimumValue={min}
                maximumValue={max}
                disable={disable}
                thumbScaleValue={thumbScaleValue}
                theme={{
                    minimumTrackTintColor: '#FF7DFF',
                    maximumTrackTintColor: THEME.slider.primary,
                }}
                setBubbleText={setBubbleValue}
                renderThumb={renderThumb}
                renderBubble={renderBubble}
                containerStyle={{ borderRadius: 10 }}
            />
            <SmallText text={maxValue.toString()} customStyle={styles.sliderRangeNumStyle} />

        </View >
    );
}

export default AppSlider