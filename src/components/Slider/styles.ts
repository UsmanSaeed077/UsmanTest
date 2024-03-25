import { StyleSheet } from "react-native";
import THEME from '../../assets/theme/dark.json'

export const styles = StyleSheet.create({
    container: {
        height: 52,
        flexDirection: 'row',
        borderRadius: 12,
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: THEME.button.tertiary,
        marginTop: 16,
    },
    sliderStyle: {
        // width: '100%',
        marginHorizontal: 10,
    },
    sliderThumb: {
        width: 20,
        height: 20,
        left: 1
    },
    sliderBubble: {
        minWidth: 40,
        maxWidth: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: THEME.slider.bubbleBG,
        paddingVertical: 4,
        paddingHorizontal: 2,
        bottom: 10,
    },
    sliderRangeNumStyle: {
        color: THEME.text.secondary,
    }
})