import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , ScrollView} from 'react-native';

import Header from '../Components/Header'
import PartiesResultContainer from '../Components/PartiesResultContainer'





export default class StatusScreen extends Component {
  render() {
    this.state = {
      textContent: 'status'
    }
    return (
      <View style={styles.container}>
        <Header style= {styles.bla} marginTop={43} navigation={this.props.navigation} screenToGo='VoteScreen' />
        <ScrollView>
          <PartiesResultContainer />
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 1000,
    justifyContent: 'flex-start',
    backgroundColor: '#33313b',
  },

});

