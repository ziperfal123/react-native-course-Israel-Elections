import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , ScrollView} from 'react-native';
import { createAppContainer, createStackNavigator} from 'react-navigation'

import Header from './Components/Header'
import PartyToChooseItem from './Components/PartyToChooseItem'
import PartiesContainer from './Components/PartiesContainer'

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




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 1000,
    justifyContent: 'flex-start',
  },

});

