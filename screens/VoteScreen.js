import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , ScrollView, Button} from 'react-native';

import Header from '../Components/Header'
import PartiesContainer from '../Components/PartiesContainer'



export default class VoteScreen extends Component {

  render() {
    this.state = {
      textContent: 'status'
    }
    return (
      <View style={styles.container}>
        <Header style= {styles.bla} marginTop={43} navigation={this.props.navigation} screenToGo='StatusScreen' />
        <ScrollView>
            <PartiesContainer navigation={this.props.navigation}/>
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

