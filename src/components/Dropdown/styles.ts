import { StyleSheet } from "react-native";
import THEME from '../../assets/theme/dark.json'

export const styles = StyleSheet.create({
    arrowIcon: {
        width: 20,
        height: 20,
    },
    boxStyle: {
        backgroundColor: THEME.dropdown.secondary,
        marginTop: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        borderColor: 'transparent'
    },
    dropdownStyles: {
        borderWidth: 0,
        backgroundColor: THEME.dropdown.primary,
        borderRadius: 12,
    },
    dropdownTextStyles: {
        color: THEME.text.primary,
    },
    inputStyles: {
        color: THEME.text.secondary,
    },
})