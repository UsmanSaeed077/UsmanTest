import { StyleSheet } from 'react-native';
import { AppFonts } from '../../constants/AppFonts';
import THEME from '../../assets/theme/dark.json'

export const styles = StyleSheet.create({
    txtStyle: {
        fontSize: 16,
        color: THEME.text.primary,
        fontFamily: AppFonts.Poppins.regular,
        lineHeight: 20,
    },
    smallTxtStyle: {
        fontSize: 14,
        color: THEME.text.primary,
        fontFamily: AppFonts.Poppins.regular
    },
    largeTxtStyle: {
        fontSize: 22,
        color: THEME.text.primary,
        fontFamily: AppFonts.Poppins.semiBold,
        fontWeight: '600'
    },
})