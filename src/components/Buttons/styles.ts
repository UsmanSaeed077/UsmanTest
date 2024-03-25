import { StyleSheet } from 'react-native';
import { AppFonts } from '../../constants/AppFonts';
import THEME from '../../assets/theme/dark.json'

export const styles = StyleSheet.create({
    container: {
        height: 52,
        flexDirection: 'row',
        borderRadius: 100,
        paddingHorizontal: 23,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: THEME.button.secondary,
    },
    txtStyle: {
        fontSize: 16,
        fontFamily: AppFonts.Poppins.regular,
    },
    trailingIconStyle: {
        width: 20,
        height: 20,
    },
})