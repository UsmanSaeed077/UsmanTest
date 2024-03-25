import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import THEME from '../../assets/theme/dark.json'

const AppStatusBar = () => {
    return (
        <StatusBar
            barStyle={'light-content'}
            backgroundColor={THEME.background}
        />
    )
}

export default AppStatusBar