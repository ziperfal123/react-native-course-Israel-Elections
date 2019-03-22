import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createAppContainer, createStackNavigator, SafeAreaView } from 'react-navigation'
import VoteScreen from './screens/VoteScreen'
import StatusScreen from './screens/StatusScreen'
// import Header from './Components/Header'

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: '#87c0cd'
  }
})

export default class App extends Component {
  constructor(props) {
    super(props)
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
      // hedaer: <Header navigation={props.navigation} screenToGo='VoteScreen'/>
      header: null
    }
  },
  StatusScreen: {
    screen: StatusScreen,
    navigationOptions: {
      // hedaer: <Header navigation={props.navigation} screenToGo='StatusScreen'/>
      header: null
    }
  }
})
const AppContainer = createAppContainer(AppStackNavigator)
