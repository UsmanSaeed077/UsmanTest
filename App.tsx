import { View, Text } from 'react-native'
import React from 'react'
import RootNavigation from './src/navigations/RootNavigation'
import AppStatusBar from './src/components/AppStatusBar/AppStatusBar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppStatusBar />
      <RootNavigation />
    </GestureHandlerRootView>
  )
}

export default App