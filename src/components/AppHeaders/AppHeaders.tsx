import { StyleSheet, View, Image, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import THEME from '../../assets/theme/dark.json'
import { AppImages } from '../../constants/AppImages'
import LargeText from '../AppText/LargeText'
import { AppFonts } from '../../constants/AppFonts'
import NormalText from '../AppText/NormalText'

interface Props {
    title?: string,
    subTitle?: string,
    onClickProfileIcon?: CallableFunction,
    onClickNotiIcon?: CallableFunction
}

const AppHeader = ({
    title,
    subTitle,
    onClickProfileIcon,
    onClickNotiIcon
}: Props) => {

    return (
        <View style={styles.container}>

            {/* leading button */}
            <TouchableOpacity onPress={() => onClickNotiIcon && onClickNotiIcon()}
                disabled={onClickNotiIcon ? false : true}
                activeOpacity={0.7}
                style={styles.leadingBtnStyle}
            >
                <Image
                    source={AppImages.chevronLeft}
                    style={styles.backIcon}
                    resizeMode='contain'
                />
            </TouchableOpacity>

            <View style={styles.titleBox}>
                {/* header title */}
                {title && <LargeText text={title} customStyle={styles.titleStyle} />}
                {subTitle && <NormalText text={subTitle} customStyle={styles.subTitleStyle} />}
            </View>

            {/* trailing button */}
            <TouchableOpacity onPress={() => onClickProfileIcon && onClickProfileIcon()}
                disabled={onClickProfileIcon ? false : true}
                activeOpacity={0.7}
                style={styles.trailingBtnStyle}
            >
                <Image
                    source={AppImages.dummyUser}
                    style={styles.userImg}
                    resizeMode='contain'
                />
            </TouchableOpacity>

        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: THEME.background,
        paddingHorizontal: 80,
        paddingVertical: 10
    },
    titleBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 17,
        color: THEME.text.primary,
        fontFamily: AppFonts.Poppins.medium,
        textAlign: 'center',
    },
    subTitleStyle: {
        color: THEME.text.secondary,
        fontFamily: AppFonts.Poppins.regular,
        textAlign: 'center',
    },
    leadingBtnStyle: {
        width: 50,
        height: 50,
        backgroundColor: "background: rgba(58, 57, 64, 0.3)",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        position: 'absolute',
        left: 22,
    },
    trailingBtnStyle: {
        borderRadius: 100,
        position: 'absolute',
        right: 22,
    },
    backIcon: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
    userImg: {
        width: 50,
        height: 50,
    },
})