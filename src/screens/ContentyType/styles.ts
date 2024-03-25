import { Platform, StyleSheet } from "react-native";
import THEME from '../../assets/theme/dark.json'
import { AppFonts } from "../../constants/AppFonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.background,
        paddingTop: Platform.OS == 'ios' ? 50 : 0,

    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: Platform.OS == 'android' ? 24 : 48,
    },
    stepperBox: {
        marginLeft: 22,
        marginTop: 20,
    },
    stepperImage: {
        height: 50,
        width: '100%',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 22,
        marginTop: 40,
    },
    contentTypeHeader: {
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: THEME.border.primary,
    },
    headingStyle: {
        fontFamily: AppFonts.Poppins.medium,
    },
    subTitleStyle: {
        color: THEME.text.secondary,
    },
    contentCreating: {
        marginTop: 32,
    },
    topicListBox: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: -5,
        marginTop: 24,
    },
    sliderContainer: {
        marginVertical: 30,
    },
})