import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createAppContainer, createStackNavigator, SafeAreaView } from 'react-navigation'
import VoteScreen from './screens/VoteScreen'
import StatusScreen from './screens/StatusScreen'

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: '#87c0cd'
  }
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      textContent: 'status'
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <AppContainer uriPrefix="/app" />
      </SafeAreaView>
    )
  }
}

const AppStackNavigator = createStackNavigator({
  VoteScreen: {
    screen: VoteScreen,
    navigationOptions: {
      header: null
    }
  },
  StatusScreen: {
    screen: StatusScreen,
    navigationOptions: {
      header: null
    }
  }
})
const AppContainer = createAppContainer(AppStackNavigator)

export default App
