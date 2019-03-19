import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { createAppContainer, createStackNavigator} from 'react-navigation'

import VoteScreen from './screens/VoteScreen'
import StatusScreen from './screens/StatusScreen'



export default class App extends Component {   

  render() {
    this.state = {
      textContent: 'status'
    }
    return (
      <AppContainer
      uriPrefix="/app"
      /> 
    );
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
  },

})

const AppContainer = createAppContainer(AppStackNavigator);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 1000,
    justifyContent: 'flex-start',
  },

});

