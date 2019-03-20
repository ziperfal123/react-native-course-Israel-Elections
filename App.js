import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { createAppContainer, createStackNavigator, SafeAreaView} from 'react-navigation'
import VoteScreen from './screens/VoteScreen'
import StatusScreen from './screens/StatusScreen'

export default class App extends Component {   
  render() {
    this.state = {
      textContent: 'status'
    }
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#87c0cd'}}>
        <AppContainer uriPrefix='/app'/> 
      </SafeAreaView>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  StatusScreen: {
    screen: StatusScreen,
    navigationOptions: {
      header: null
    }
  },
  VoteScreen: {
    screen: VoteScreen,
    navigationOptions: {
      header: null
    }
  },
})
const AppContainer = createAppContainer(AppStackNavigator);

/* ..styles.. */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 1000,
    justifyContent: 'flex-start',
  },
});

